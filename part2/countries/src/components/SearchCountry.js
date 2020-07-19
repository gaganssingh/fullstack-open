import React from "react";

const SearchCountry = ({ handleCountryInput, enteredCountry }) => (
   <form>
      <label htmlFor="find-country">Entry Country Name:</label>
      <input
         type="text"
         name="find-country"
         onChange={handleCountryInput}
         value={enteredCountry}
      />
   </form>
);

export default SearchCountry;
