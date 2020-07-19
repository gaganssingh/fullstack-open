import React from "react";

const CountryDetail = ({ result }) => (
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
      <img src={result.flag} alt={result.name} style={{ width: "350px" }} />
   </div>
);

export default CountryDetail;
