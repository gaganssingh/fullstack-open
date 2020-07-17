import React from "react";

const Statistic = (props) => {
   return (
      <p>
         {props.text}: {props.value}
         {props.text === "positive" && "%"}
      </p>
   );
};

export default Statistic;
