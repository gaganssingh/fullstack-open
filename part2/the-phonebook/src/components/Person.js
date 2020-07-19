import React from "react";

const Person = ({ renderedPersons, deletePerson }) => (
   <div>
      {renderedPersons.map((person) => (
         <p key={person.name}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
         </p>
      ))}
   </div>
);

export default Person;
