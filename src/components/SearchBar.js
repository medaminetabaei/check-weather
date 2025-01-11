
import React, { useState } from "react";
import "../styles/SearchBar.css";

function SearchBar({ setCity }) {
    const [inputValue, setInputValue] = useState("");
    const countries = [
        "France", "Maroc", "Allemagne", "Espagne", "Italie",
        "Japon", "Chine", "Canada", "États-Unis", "Inde"
    ];
    const handleSearch = () => {
        if (inputValue.trim()) {
            setCity(inputValue);
        }
    };

    return (
        <div className="background">
            <div className="content">
                <h1>Don’t Let the Weather Surprise You!</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Stay Ahead, Check the Weather Anywhere!"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSearch}> Rechercher</button>
                </div>
                <div className="tags">
                    {countries.map((country, index) => (
                        <span key={index} className="tag">{country}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
