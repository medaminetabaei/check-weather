import axios from "axios";

// Pixabay API
const PIXABAY_API_KEY = "46432732-1777b7227fd2af4052e7d4b76";
const PIXABAY_BASE_URL = "https://pixabay.com/api/";

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(PIXABAY_BASE_URL, {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: "photo",
      },
    });
    return response.data.hits || []; // Return empty array if no images found
  } catch (error) {
    console.error("Erreur lors de la récupération des images:", error);
    return [];
  }
};

// OpenWeather API
const WEATHER_API_KEY = "8327dc7bde9ba031e64c589afdcec88b";
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(WEATHER_BASE_URL, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: "metric", // Temperature in °C
        lang: "fr", // Weather descriptions in French
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo:", error);
    return null;
  }
};
