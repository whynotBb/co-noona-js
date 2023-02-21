let news = [];
let page = 1;
let total_pages = 0;
const menus = document.querySelectorAll(".menus button");
const searchBtn = document.getElementById("searchBtn");
let url;
let category = "";

menus.forEach((item, idx) => {
  item.addEventListener("click", function () {
    category = this.innerText.toLowerCase();
    getLatestNews(category);
  });
});

const getNews = async () => {
  try {
    let header = new Headers({
      // "x-api-key": "hjmgah6VkSooZdDWfDsr-t9xAv42iwr-52iPPAHRBcE",
      "x-api-key": "LmCKjCVnD5EtPCcf-my1JEmJ3dP-w1t1spjxT-nAQto",
    });
    url.searchParams.set("page", page); //&page=page변수의값
    console.log("url=", url);
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if (response.status == 200) {
      console.log("data = ", data);
      if (data.total_hits == 0) {
        throw new Error("검색된 결과 값이 없습니다.");
      }
      news = data.articles;
      total_pages = data.total_pages;
      page = data.page;
      render();
      pagination();
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log("catch error", error.message);
    errorRender(error.message);
  }
};

const getLatestNews = async (category) => {
  url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${category}&page_size=10`
  );
  getNews();
};

const getNewsByKeyword = async () => {
  let keyword = document.getElementById("searchTxt").value;
  url = new URL(
    `https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`
  );
  getNews();
};

const render = () => {
  let newsHTML = "";
  newsHTML = news
    .map((item) => {
      return `
      <div class="row news">
        <div class="col-lg-4">
          <img
            class="news-img-size"
            src="${
              item.media ||
              "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"
            }"

          />
        </div>
        <div class="col-lg-8">
          <h2>${item.title}</h2>
          <p>${
            item.summary.length <= 0
              ? "내용 없음"
              : item.summary.length > 200
              ? item.summary.substring(0, 200) + "..."
              : item.summary
          }</p>
          <div>${item.rights} * ${moment(item.published_date).fromNow()}</div>
        </div>
      </div>
    `;
    })
    .join("");

  document.getElementById("news-board").innerHTML = newsHTML;
};

const errorRender = (message) => {
  let errorHtml = `<div class="alert alert-danger text-center mt-4" role="alert">
  ${message}
</div>`;
  document.getElementById("news-board").innerHTML = errorHtml;
};

const pagination = () => {
  let paginationHtml = "";
  let pageGroup = Math.ceil(page / 5);
  const last = pageGroup * 5;
  const first = last - 4;
  paginationHtml = `
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" moveToPrev()>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
  `;
  for (let i = first; i <= last; i++) {
    paginationHtml += `
      <li class="page-item"><a class="page-link ${
        page == i ? "active" : ""
      }" href="#" onclick="moveToPage(${i})">${i}</a></li>
    `;
  }

  document.querySelector(".pagination").innerHTML = paginationHtml;
};

getLatestNews(category);
const moveToPage = (pageNum) => {
  page = pageNum;

  getNews();
};
const moveToPrev = () => {
  if (page > 1) {
    page = page - 1;
    getNews();
  }
};
const moveToNext = () => {
  // if (page < ) {

  // }
  page = page + 1;

  getNews();
};
searchBtn.addEventListener("click", getNewsByKeyword);
