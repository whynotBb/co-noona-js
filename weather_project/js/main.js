//1. 현재 시간 실시간 보여주기
const realTime = document.querySelector(".now");

const getClock = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const second = now.getSeconds();
  realTime.textContent = `
${year}-${month < 10 ? `0${month}` : month}-${date < 10 ? `0${date} ` : date} ${
    hour < 10 ? `0${hour}` : hour
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    second < 10 ? `0${second}` : second
  }
`;
};
getClock();
setInterval(getClock, 1000);
//2. 현재 위치 가져와서 기본 날씨 보여주기
let url;
let lat;
let lon;
let weather;
let city;
let weather_temps;
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  lat = crd.latitude;
  lon = crd.longitude;
  getWeather();
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

const getWeather = async () => {
  const API_key = "6dd95cfc5f180ab7bf62671b417e6c68";
  url = new URL(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&lang=KR`
  );
  let response = await fetch(url);
  let data = await response.json();
  weather_main = data.weather[0].main;
  weather_desc = data.weather[0].description;
  city = data.name;
  temp = data.main.temp - 273.15;
  temp_max = data.main.temp_max - 273.15;
  temp_min = data.main.temp_min - 273.15;
  Feels_like = data.main.feels_like - 273.15;
  console.log(data);

  render();
};
const render = () => {
  let weatherHTML = "";
  weatherHTML = `
    <p class="city"><span class="material-symbols-outlined">location_on</span> ${city}</p>
    <p class="weather_icon ${weather_main.toLowerCase()}"></p>
    <p class="temp">${Math.round(temp * 10) / 10}°C</p>
    <p class="temp_minmax"><span class="min">${
      Math.round(temp_min * 10) / 10
    }°C</span> / <span class="max">${
    Math.round(temp_max * 10) / 10
  }°C</span></p>
    <p class="feels_like">체감온도 ${
      Math.round(Feels_like * 10) / 10
    }°C : ${weather_desc}</p>
    `;
  document.querySelector(".weather").innerHTML = weatherHTML;
};

//3.검색기능
const inputBox = document.querySelector(".input_box");
const searchOpen = document.querySelector(".search_open");
const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("search_btn");
let searchWord;
searchOpen.addEventListener("click", () => {
  inputBox.classList.add("on");
});
searchBtn.addEventListener("click", () => {
  searchWord = searchInput.value;
  searchInput.value = "";
  console.log(searchWord);
  getSearchWeather();
  inputBox.classList.remove("on");
});

const getSearchWeather = async () => {
  const API_key = "6dd95cfc5f180ab7bf62671b417e6c68";
  url = new URL(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchWord}&appid=${API_key}&lang=KR`
  );
  let response = await fetch(url);
  let data = await response.json();
  weather_main = data.weather[0].main;
  weather_desc = data.weather[0].description;
  city = data.name;
  temp = data.main.temp - 273.15;
  temp_max = data.main.temp_max - 273.15;
  temp_min = data.main.temp_min - 273.15;
  Feels_like = data.main.feels_like - 273.15;
  console.log(data);

  render();
};
