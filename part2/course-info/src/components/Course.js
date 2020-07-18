import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
   return (
      <>
         <Header name={course.name} />
         <Content course={course.parts} />
         <Total course={course.parts} />
      </>
   );
};

export default Course;
