var citySearchEl = document.querySelector("#city-search");
var cityNameEl = document.querySelector("#city-name");
var currentWeatherEl = document.querySelector("#current-weather");
var forecastEl = document.querySelector("#forecast");
var apiKey = "f449fadde8a9c403f5f9f30c8a458f33";
var cityHistoryEl = document.querySelector("#city-history");
var searchHistory = [];

var formSubmitHandler = function (event) {
  event.preventDefault();

  var cityName = cityNameEl.value.trim();

  if (cityName) {
    getCurrentWeather(cityName);
    fiveDayForecast(cityName);
    storeCity(cityName);
    cityNameEl.value = "";
  } else {
    alert("Enter a valid city");
  }
};
