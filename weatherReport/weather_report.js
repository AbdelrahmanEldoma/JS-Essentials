function showweatherDetails(event) {
    event.preventDefault();
}

const element = document.getElementById("btn");
element.addEventListener("click", function() {
    var city = document.getElementById('city').value;
    const apiKey = '497084506c57581db88ebafdc72be507';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=497084506c57581db88ebafdc72be507`;

    fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})

.catch(error => {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
  });
  document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
  });