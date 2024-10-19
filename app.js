const apikey = "c1e0b2ef010a1b472dc8d261943e114b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weather = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    // document.querySelector(".weather").style.display = "none";
  } else {
    let data =  await response.json();

  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    weather.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather.src = "clear.png";
  } else if (data.weather[0].main == "Rain") {
    weather.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weather.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather.src = "mist.png";
  }
  document.querySelector(".weather").style.display = "block";
  data.querySelector(".error").style.display = "none";
}
}


searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
