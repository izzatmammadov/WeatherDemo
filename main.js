const weatherForm = document.querySelector("#weather-form");

weatherForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = document.querySelector("#city").value;
  getWeatherData(city);
  document.querySelector("input").value = ""
});

function getWeatherData(city) {
  const apiKey = "addeebf98ad3829186f35c693f6fa4d0";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `<h2 class="h1">${
        data.name
      } ${data.main.temp.toFixed(0)}°C</h2>
      <div class="container mx-auto d-flex flex-column justify-content-between align-items-center p-3">
        <div class="d-flex">
          <p class="h5">Felt: ${(data.main.temp + 1).toFixed(0)}</p>
          <p class="material-symbols-outlined">device_thermostat</p>
        </div>
        <div class="d-flex">
          <p class="h5">Wind Speed: ${data.wind.speed}</p>
          <p class="material-symbols-outlined">air</p>
        </div>
        <div class="d-flex">
          <p class="h5">Humidty: ${data.main.humidity}</p>
          <p class="material-symbols-outlined">humidity_percentage</p>
        </div>
      </div>`;
    })
    .catch((error) => {
      console.error("Error Weather Data: ", error);
    });
}
