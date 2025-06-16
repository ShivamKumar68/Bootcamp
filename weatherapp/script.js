const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    
    const data = await response.json();
    const weatherResult = document.getElementById("weatherResult");
    
    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>${data.weather[0].main}</strong> - ${data.weather[0].description}</p>
      <p>🌡️ Temp: ${data.main.temp} °C</p>
      <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
