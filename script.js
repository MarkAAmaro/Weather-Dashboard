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
}