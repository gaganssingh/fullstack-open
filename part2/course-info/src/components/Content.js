import React from "react";

import Part from "./Part";

const Content = ({ course }) => (
   <div>
      {course.map((c) => (
         <Part key={c.id} name={c.name} exercises={c.exercises} />
      ))}
   </div>
);

export default Content;
