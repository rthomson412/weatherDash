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

var getCurrentWeather = function (city) {
  var cityWeather =
    "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=" +
    city +
    "&appid=" +
    apiKey;

  fetch(cityWeather).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayCurrentWeather(data);
        var cityLat = data.coord.lat;
        var cityLon = data.coord.lon;

        return fetch(
          "https://api.openweathermap.org/data/2.5/uvi?lat=" +
            cityLat +
            "&lon=" +
            cityLon +
            "&appid=" +
            apiKey
        )
          .then(function (response) {
            return response.json();
          })
          .then(function (response) {
            displayUVIndex(response);
          });
      });
    } else {
      alert("Error: " + response.cod);
    }
  });
};


