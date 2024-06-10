const key = "27a8d2525a701e3a343f0221290f41ea";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search .btn");
const weatherIcon = document.querySelector("#weather-img");

async function getWeather(city) {
  const response = await fetch(url + city + `&appid=${key}`);
  var data = await response.json();
  console.log(data);
  if (response.status == "404") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".card").style.display = "none";
  } else {
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".city").innerHTML = data.name;
    if (data.weather[0].main === "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main === "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main === "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main === "Snow") {
      weatherIcon.src = "./images/snow.png";
    }
    document.querySelector(".error").style.display = "none";
    document.querySelector(".card").style.display = "block";
  }
}

searchBtn.addEventListener("click", function () {
  getWeather(searchBox.value);
  document.querySelector(".card").style.display = "block";
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(function () {
  const d = new Date();
  document.querySelector(".time").innerHTML =
    d.getHours() + ":" + d.getMinutes();
  document.querySelector(".dat").innerHTML =
    days[d.getDay()] +
    ", " +
    d.getDate() +
    " " +
    months[d.getMonth() + 1] +
    " " +
    d.getFullYear();
}, 1000);