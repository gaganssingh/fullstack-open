import React, { useState, useEffect } from "react";
import axios from "axios";

import Weather from "./Weather";

const CountryDetail = ({ result }) => {
   const [weatherData, setWeatherData] = useState([]);

   useEffect(() => {
      axios
         .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${result.capital}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`
         )
         .then((response) => setWeatherData(response.data));
   }, [result.capital]);

   return (
      <div>
         <h2>{result.name}</h2>
         <p>
            Capital: {result.capital}
            <br />
            Population: {result.population}
         </p>
         <h3>Languages</h3>
         <ul>
            {result.languages.map((lang) => (
               <li key={lang.iso639_1}>{lang.name}</li>
            ))}
         </ul>
         <img src={result.flag} alt={result.name} style={{ width: "150px" }} />
         {weatherData && <Weather data={weatherData} />}
      </div>
   );
};

export default CountryDetail;
