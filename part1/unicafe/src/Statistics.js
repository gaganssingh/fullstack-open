import React from "react";
import Statistic from "./Statistic";

const Statistics = ({ good, neutral, bad, average, positive }) => {
   return (
      <>
         <Statistic text="good" value={good} />
         <Statistic text="neutral" value={neutral} />
         <Statistic text="bad" value={bad} />
         <Statistic text="average" value={average} />
         <Statistic text="positive" value={positive} />
      </>
   );
};

export default Statistics;
