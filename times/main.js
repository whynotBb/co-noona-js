const menus = document.querySelectorAll(".menus button");
console.log(menus);
let category = "";
menus.forEach((item, idx) => {
  item.addEventListener("click", function () {
    category = this.innerText;
    getLatestNews(category);
  });
});
console.log(category);

let news = [];

const getLatestNews = async (category) => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${category}&page_size=10`
  );

  let header = new Headers({
    "x-api-key": "jV9SUKRFOuUAq8MZENyC9isSL59KDVWo0sdDl_cQ4q8",
  });
  let response = await fetch(url, { headers: header }); // ajax, http , fetch ( 데이터를 받는 방법)
  let data = await response.json();
  // async => await 셋트 : 시간이 걸리는 일을 할 때 기다려줘!/ 다음으로 넘기지 말고, 가져올 때 까지 기다리기
  news = data.articles;

  render();
  console.log(news);
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
getLatestNews(category);
