import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

import CityCard from "./components/CityCard";
import CustomerReview from "./components/CustomerReview";
import { fetchImages, fetchWeather } from "./components/Api";
import Footer from "./components/Footer";

const defaultCountries = [
  "France", "Morocco", "Germany", "Spain", "Italy",
  "Japan", "China","London" 
];

function App() {
  const [city, setCity] = useState(""); // For the searched city
  const [cityData, setCityData] = useState(null); // Data for the searched city
  const [defaultCitiesData, setDefaultCitiesData] = useState([]); // Data for default countries

  useEffect(() => {
    // Fetch data for default countries on load
    const fetchDefaultCities = async () => {
      const citiesData = [];
      for (const country of defaultCountries) {
        try {
          const images = await fetchImages(country);
          const weather = await fetchWeather(country);
          citiesData.push({
            country,
            image: images[0]?.webformatURL || "https://via.placeholder.com/300x200?text=No+Image",
            weather,
          });
        } catch (error) {
          console.error(`Error fetching data for ${country}:`, error);
        }
      }
      setDefaultCitiesData(citiesData);
    };

    fetchDefaultCities();
  }, []);

  // Fetch data for the searched city
  useEffect(() => {
    const fetchCity = async () => {
      if (!city) return; // If no city is searched, skip
      try {
        const images = await fetchImages(city);
        const weather = await fetchWeather(city);
        setCityData({
          country: city,
          image: images[0]?.webformatURL || "https://via.placeholder.com/300x200?text=No+Image",
          weather,
        });
      } catch (error) {
        console.error(`Error fetching data for ${city}:`, error);
        setCityData(null);
      }
    };

    fetchCity();
  }, [city]);

  return (
    <div>
      <Navbar />
      <SearchBar setCity={setCity} />
      
      <div className="city-card-container">
        {cityData && (
          <CityCard
            city={cityData.country}
            image={cityData.image}
            weather={cityData.weather}
          />
        )}
        {defaultCitiesData.map((data, index) => (
          <CityCard
            key={index}
            city={data.country}
            image={data.image}
            weather={data.weather}
          />
        ))}
      </div>
      <CustomerReview />
      <Footer/>
    </div>
  );
}

export default App;
