const searchButton = document.querySelector('.searchButton');
const searchInput = document.querySelector('.searchInput');
const temperatureElement = document.querySelector('.temp');
const weatherTypeElement = document.querySelector('.weathertype');
const locationElement = document.querySelector('.location');
const weatherImage = document.querySelector('.clouds');
const dayDateElement = document.querySelector('.daydate');

const apiKey = 'e07a7a6e8c3782dd444bfad6695ef933';

function getWeatherIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

async function getWeatherData(countryCode) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryCode}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherUI(data) {
    const weatherDescription = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconSrc = getWeatherIconUrl(iconCode);

    temperatureElement.textContent = `${data.main.temp}°C`;
    weatherTypeElement.textContent = weatherDescription;
    locationElement.textContent = data.name;
    weatherImage.src = iconSrc;
    weatherImage.style.height = '7rem';
    weatherImage.style.width = '7rem';
}


searchButton.addEventListener('click', () => getWeatherData(searchInput.value));

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getWeatherData(searchInput.value);
    }
});

dayDateElement.textContent = formatDate(new Date());

function formatDate(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}
