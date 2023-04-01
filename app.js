const apiKey = "70c6193f4f427fc1ac3d37105ef40189"; // replace with your own API key from OpenWeatherMap

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temp");
const feelsLike = document.querySelector("#feels-like");
const windSpeed = document.querySelector("#wind-speed");
const description = document.querySelector("#description");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      cityName.textContent = data.name;
      temperature.textContent = `${data.main.temp}°C`;
      feelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      description.textContent = data.weather[0].description;
    });
});
