import React from "react";

import CountryDetail from "./CountryDetail";

const CountryList = (props) => {
   const { results, handleShowDetails, showDetails, setShowDetails } = props;
   console.log(results);
   let renderedResults;
   if (results.length > 10) {
      renderedResults = <p>Too many matches, specify another filter</p>;
   } else if (results.length > 1) {
      renderedResults = results.map((result) => (
         <div key={result.numericCode}>
            <p>
               {result.name}
               <button onClick={() => handleShowDetails()}>Show details</button>
            </p>
            {showDetails && (
               <>
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
               </>
            )}
         </div>
      ));
   } else {
      renderedResults = results.map((result) => (
         <CountryDetail key={result.numericCode} result={result} />
      ));
   }

   return !results.length ? (
      <p>Please search for a country</p>
   ) : (
      renderedResults
   );
};

export default CountryList;
