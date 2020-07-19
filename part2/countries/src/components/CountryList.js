import React from "react";

const CountryList = ({ results }) => {
   console.log(results);
   let renderedResults;
   if (results.length > 10) {
      renderedResults = <p>Too many matches, specify another filter</p>;
   } else if (results.length > 1) {
      renderedResults = results.map((result) => (
         <p key={result.numericCode}>{result.name}</p>
      ));
   } else {
      renderedResults = results.map((result) => (
         <div key={result.numericCode}>
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
            <img
               src={result.flag}
               alt={result.name}
               style={{ width: "350px" }}
            />
         </div>
      ));
   }

   return !results.length ? (
      <p>Please search for a country</p>
   ) : (
      renderedResults
   );
};

export default CountryList;
