const apikey = "cd8377c12613e6e8cb29c7da04b83220";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search-input");
const searchbtn = document.querySelector(".search-btn");
const weather_image = document.querySelector(".weather-image");
const card = document.querySelector(".card");
async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-num").innerHTML =
      data.main.humidity + "%";
    document.querySelector(".wind-num").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Cloud") {
      weather_image.src = "images/cloud.png";
      card.style.background =
        "linear-gradient(135deg, rgb(63, 119, 129), rgb(226, 241, 245))";
    } else if (data.weather[0].main == "Clear") {
      weather_image.src = "images/Clear.png";
      card.style.background =
        "linear-gradient(135deg, rgb(20, 119, 129), rgb(226, 241, 245))";
    } else if (data.weather[0].main == "Rain") {
      weather_image.src = "images/rain.png";
      card.style.background =
        "linear-gradient(135deg, rgb(0, 65, 100), rgb(226, 241, 245))";
    } else if (data.weather[0].main == "Drizzle") {
      weather_image.src = "images/drizzle.png";
      card.style.background =
        "linear-gradient(135deg, rgb(15, 55, 90), rgb(226, 241, 245))";
    } else if (data.weather[0].main == "Mist") {
      weather_image.src = "images/mist.png";
      card.style.background =
        "linear-gradient(135deg, rgb(40, 65, 100), rgb(226, 241, 245))";
    }
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchinput.value);
});
searchinput.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    checkweather(searchinput.value);
  }
});
