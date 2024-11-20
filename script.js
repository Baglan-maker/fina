const currentMode = localStorage.getItem("theme");

if (currentMode === "dark") {
  document.body.classList.add("dark-mode");
}

document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});


const toggleCitiesBtn = document.getElementById("toggleCitiesBtn");
const cityListItems = document.querySelectorAll("#cityList .city");

let showMainCitiesOnly = localStorage.getItem("showMainCitiesOnly") === "true";

toggleCitiesBtn.textContent = showMainCitiesOnly ? "Show All Cities" : "Show Main Cities Only";
updateCityVisibility();

toggleCitiesBtn.addEventListener("click", () => {
    showMainCitiesOnly = !showMainCitiesOnly;

    localStorage.setItem("showMainCitiesOnly", showMainCitiesOnly);

    toggleCitiesBtn.textContent = showMainCitiesOnly ? "Show All Cities" : "Show Main Cities Only";

    updateCityVisibility();
});

function updateCityVisibility() {
    cityListItems.forEach(city => {
        if (showMainCitiesOnly) {
            city.style.display = city.classList.contains("main-city") ? "list-item" : "none";
        } else {
            city.style.display = "list-item";
        }
    });
}

const apiKey = 'bff3de8316ee7c09cd0a59ceef2ef2b5'; 

function getWeather(city, weatherTitleId, weatherDescriptionId, temperatureId, windId, pressureId) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`) 
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = data.weather[0].description; 
                const temp = data.main.temp; 
                const cityName = data.name; 
                const windSpeed = data.wind.speed; 
                const pressure = data.main.pressure; 

                document.getElementById(weatherTitleId).textContent = `Weather in ${cityName}:`;
                document.getElementById(weatherDescriptionId).textContent = `Description: ${weather}`;
                document.getElementById(temperatureId).textContent = `Temperature: ${temp}°C`;
                document.getElementById(windId).textContent = `Wind Speed: ${windSpeed} m/s`;
                document.getElementById(pressureId).textContent = `Pressure: ${pressure} hPa`;
            } else {
                document.getElementById(weatherTitleId).textContent = 'City not found';
                document.getElementById(weatherDescriptionId).textContent = '';
                document.getElementById(temperatureId).textContent = '';
                document.getElementById(windId).textContent = '';
                document.getElementById(pressureId).textContent = '';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById(weatherTitleId).textContent = 'Error loading data';
        });
}

getWeather('Astana', 'astanaWeatherTitle', 'astanaWeatherDescription', 'astanaTemperature', 'astanaWind', 'astanaPressure');
getWeather('Almaty', 'almatyWeatherTitle', 'almatyWeatherDescription', 'almatyTemperature', 'almatyWind', 'almatyPressure');
