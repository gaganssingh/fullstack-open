import React from "react";

const Weather = ({ data }) => {
   console.log(data);

   let renderWeather;
   if (data.length === 0) {
      renderWeather = <p>Fetching weather</p>;
   } else {
      renderWeather = (
         <div>
            <h3>Weather in </h3>
            <p>
               Current temperature: {data.main.temp} Celcius
               <br />
               Feels like: {data.main.feels_like} Celcius
            </p>
         </div>
      );
   }

   return renderWeather;
};

export default Weather;
