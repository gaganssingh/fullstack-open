import React from "react";

const Search = ({ handleFilterByName, value }) => (
   <p>
      Search by name:
      <input onChange={handleFilterByName} value={value} />
   </p>
);

export default Search;
