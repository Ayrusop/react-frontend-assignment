import React, { useState } from "react";
import { fetchWeather } from "../services/Api";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setWeather(null);

    const data = await fetchWeather(city);
    if (data) {
      setWeather(data);
    } else {
      setError("Could not fetch weather data.");
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={handleSearch}>
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      {weather && (
        <div className="mt-3">
          <h4>{weather.name}, {weather.sys.country}</h4>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
