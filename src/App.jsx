import { useState, useEffect } from "react";
import "./App.css";
import useFetchData from "../Hooks/FetchHook";
import { getBackground } from "./utils/getBackground";

function App() {
  const [coords, setCoords] = useState({ lat: null, lon: null });
  const [currentUrl, setCurrentUrl] = useState("");
  const [forecastUrl, setForecastUrl] = useState("");
  const [background, setBackground] = useState("");

  const {
    data: currentData,
    loading: loadingCurrent,
    error: errorCurrent,
  } = useFetchData(currentUrl || null);
  const {
    data: forecastData,
    loading: loadingForecast,
    error: errorForecast,
  } = useFetchData(forecastUrl || null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lon: longitude });

        const newCurrentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=95532e9d37c1dc6209221d1372beb78d&units=metric`;
        const newForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=95532e9d37c1dc6209221d1372beb78d&units=metric`;

        setCurrentUrl(newCurrentUrl);
        setForecastUrl(newForecastUrl);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (currentData) {
      const weather = currentData.weather[0].main;
      const bg = getBackground(weather);
      setBackground(bg);
    }
  }, [currentData]);

  if (!coords.lat || !coords.lon) return <p>Getting your location...</p>;
  if (loadingCurrent || loadingForecast) return <p>Loading weather data...</p>;
  if (errorCurrent || errorForecast) return <p>Error loading data</p>;
  if (!currentData || !forecastData) return <p>No weather data found.</p>;

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        // width: "100vw",
        color: "#fff",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Current Weather */}
      <div className="weather-card">
        <h1>{currentData.name}</h1>
        <h2>{currentData.main.temp}°C</h2>
        <img
          src={`https://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`}
          alt={currentData.weather[0].description}
        />
        <p>{currentData.weather[0].description}</p>
        <p>
          Longitude: {currentData.coord.lon} | Latitude: {currentData.coord.lat}
        </p>
      </div>

      {/* Forecast */}
      <h2 style={{ marginTop: "2rem" }}>Next 5 Days Forecast 🌦️</h2>
      <div className="forecast-grid">
        {forecastData.list.slice(0, 5).map((day, index) => (
          <div key={index} className="forecast-card">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>{day.main.temp}°C</p>
            <p>{day.weather[0].main}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
