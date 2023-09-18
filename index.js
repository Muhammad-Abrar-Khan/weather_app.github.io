const searchButton = document.querySelector('.searchButton');
const searchInput = document.querySelector('.searchInput');

// Function to fetch weather data based on the country code
function getWeatherData(countryCode) {
    const apiKey = 'e07a7a6e8c3782dd444bfad6695ef933';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryCode}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            updateWeatherUI(data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
}

// Event listener for the search button click
searchButton.addEventListener('click', function () {
    const countryCode = searchInput.value;
    getWeatherData(countryCode);
});

// Event listener for the Enter key press in the input field
searchInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const countryCode = searchInput.value;
        getWeatherData(countryCode);
    }
});

function updateWeatherUI(data) {
    const temperatureElement = document.querySelector('.temp');
    const weatherTypeElement = document.querySelector('.weathertype');
    const locationElement = document.querySelector('.location');

    const temperature = data.main.temp;
    const weatherType = data.weather[0].description;
    const cityName = data.name;

    temperatureElement.textContent = `${temperature}°C`;
    weatherTypeElement.textContent = weatherType;
    locationElement.textContent = cityName;
}

// Function to format a date as "Day, DD Month" (e.g., "Fri, 05 June")
function formatDate(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    const dayOfWeek = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];

    return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}

// Usage example:
const today = new Date();
const formattedDate = formatDate(today);

// Update the HTML element with class "daydate" with the formatted date
const dayDateElement = document.querySelector('.daydate');
dayDateElement.textContent = formattedDate;
