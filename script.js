//Api Key from site
const apiKey = '599e78c3459a8c73ce2b3faeb84e514d';
//Event listener
document.getElementById('search-btn').addEventListener('click', function() {
    const cityInput = document.getElementById('city-input').value;
    searchWeather(cityInput);
  });
  
// Function to search weather for a city
function searchWeather(city) {
  // Fetch API data
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      displayCurrentWeather(data);
      displayForecast(data);
      addToSearchHistory(city);
    })
    .catch(error => {
      console.log('Error:', error);
    });
}
  // Function to display current weather
function displayCurrentWeather(data) {
  const city = data.city.name;
  const date = data.list[0].dt_txt;
  const temperature = data.list[0].main.temp;
  const humidity = data.list[0].main.humidity;
  const windSpeed = data.list[0].wind.speed;
  const icon = data.list[0].weather[0].icon;
//updated variable to display api image source
const currentWeatherElement = document.getElementById('current-weather');
 currentWeatherElement.innerHTML = `
   <h2>${city}</h2>
   <p>Date: ${date}</p>
   <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
   <p>Temperature: ${temperature}°C</p>
   <p>Humidity: ${humidity}%</p>
   <p>Wind Speed: ${windSpeed} m/s</p> `
 ;
}

function displayForecast(data) {

  const forecastData = data.list.slice(1, 6);
  const forecastElement = document.getElementById('forecast');
 forecastElement.innerHTML = '<h2>5-Day Forecast</h2>';

 forecastData.forEach(forecast => {
  const date = forecast.dt_txt;
  const temperature = forecast.main.temp;
  const humidity = forecast.main.humidity;
  const windSpeed = forecast.wind.speed;
  const icon = forecast.weather[0].icon;

  const forecastItem = document.createElement('div');
   forecastItem.classList.add('forecast-item');
   forecastItem.innerHTML = `
     <p>Date: ${date}</p>
     <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
     <p>Temperature: ${temperature}°C</p>
     <p>Humidity: ${humidity}%</p>
     <p>Wind Speed: ${windSpeed} m/s</p>
   `;

   forecastElement.appendChild(forecastItem);
 });
}
// search history function
function addToSearchHistory(city) {
  const historyList = document.getElementById('history-list');
  const listItem = document.createElement('li');
  listItem.textContent = city;
  historyList.appendChild(listItem);
 }

