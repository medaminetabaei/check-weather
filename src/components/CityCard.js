import React, { useState, useEffect } from "react";
import "../styles/CityCard.css";
import { fetchImages, fetchWeather } from "../components/Api"; // Import utilities
import { FaTemperatureHigh, FaCloud, FaTint, FaWind } from "react-icons/fa"; // Import weather icons

const CityCard = ({ city }) => {
  const [image, setImage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (city) {
      fetchCityData();
    }
  }, [city]);

  const fetchCityData = async () => {
    setLoading(true);
    try {
      // Fetch image
      const images = await fetchImages(city);
      setImage(images[0]?.webformatURL || "https://via.placeholder.com/300x200?text=No+Image");

      // Fetch weather
      const weatherData = await fetchWeather(city);
      setWeather(weatherData);
    } catch (error) {
      console.error("Error fetching city data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="city-card">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* City Image or Placeholder */}
          {image ? (
            <img src={image} alt={city} className="city-image" />
          ) : (
            <div className="placeholder">No image available</div>
          )}

          {/* City Name */}
          <h3>{city}</h3>

          {/* Weather Info */}
          {weather ? (
            <div className="weather-info">
              {/* Temperature */}
              <div className="weather-item">
                <FaTemperatureHigh className="weather-icon temp-icon" />
                <span>Température: {weather.main.temp}°C</span>
              </div>

              {/* Weather Description */}
              <div className="weather-item">
                <FaCloud className="weather-icon cloud-icon" />
                <span>Conditions: {weather.weather[0]?.description}</span>
              </div>

              {/* Humidity */}
              <div className="weather-item">
                <FaTint className="weather-icon humidity-icon" />
                <span>Humidité: {weather.main.humidity}%</span>
              </div>

              {/* Wind */}
              <div className="weather-item">
                <FaWind className="weather-icon wind-icon" />
                <span>Vent: {weather.wind.speed} m/s</span>
              </div>
            </div>
          ) : (
            <p>No weather data available</p>
          )}
        </>
      )}
    </div>
  );
};

export default CityCard;
