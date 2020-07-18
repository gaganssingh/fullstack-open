import React from "react";

const Total = ({ course }) => {
   let total = course.reduce((accum, next) => accum + next.exercises, 0);

   return <h3>Number of exercises {total} </h3>;
};

export default Total;
