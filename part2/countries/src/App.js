import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchCountry from "./components/SearchCountry";
import CountryList from "./components/CountryList";

const App = () => {
   const [countries, setCountries] = useState([]);
   const [enteredCountry, setEnteredCountry] = useState("");
   const [results, setResults] = useState([]);
   const [showDetails, setShowDetails] = useState(false);

   useEffect(() => {
      axios
         .get("https://restcountries.eu/rest/v2/all")
         .then((response) => setCountries(response.data));
   }, []);

   const handleCountryInput = (e) => {
      const filteredCountries = [];
      setEnteredCountry(e.target.value);
      countries.forEach((country) => {
         if (
            country.name.toLowerCase().includes(e.target.value.toLowerCase())
         ) {
            filteredCountries.push(country);
         }
      });

      setResults(filteredCountries);
   };

   const handleShowDetails = () => {
      setShowDetails(!showDetails);
   };

   return (
      <div>
         <SearchCountry
            handleCountryInput={handleCountryInput}
            enteredCountry={enteredCountry}
         />
         <CountryList
            results={results}
            handleShowDetails={handleShowDetails}
            showDetails={showDetails}
         />
      </div>
   );
};

export default App;
