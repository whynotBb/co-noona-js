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
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

const getWeather = () => {
  url = new URL(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${crd.latitude}&lon=${crd.longitude}&exclude=hourly,daily&appid=6dd95cfc5f180ab7bf62671b417e6c68`
  );
};
console.log(url);
