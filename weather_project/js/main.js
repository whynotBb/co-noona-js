let realTime = document.querySelector(".now");

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
