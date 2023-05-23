//Api Key from site
const apiKey = '599e78c3459a8c73ce2b3faeb84e514d';

document.getElementById('search-btn').addEventListener('click', function() {
    const cityInput = document.getElementById('city-input').value;
    searchWeather(cityInput);
  });
  