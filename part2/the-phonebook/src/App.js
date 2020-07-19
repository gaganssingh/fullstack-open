import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");
   const [filteredName, setFilteredName] = useState("");

   useEffect(() => {
      axios
         .get("http://localhost:3001/persons")
         .then((response) => setPersons(response.data));
   }, []);

   const addPerson = (event) => {
      event.preventDefault();
      if (persons.find((person) => person.name === newName)) {
         alert(`${newName} is already added to the phonebook`);
         return;
      }

      if (!newName || !newNumber) {
         return "Please add a valid number";
      }

      const personObject = { name: newName, number: newNumber };
      setPersons(persons.concat(personObject));
      setNewName("");
   };

   const handleNewName = (event) => {
      setNewName(event.target.value);
   };

   const handleNewNumber = (event) => {
      setNewNumber(event.target.value);
   };

   const handleFilterByName = (event) => {
      setFilteredName(event.target.value);
   };

   const renderedPersons = !filteredName
      ? persons
      : persons.filter((person) =>
           person.name.toLowerCase().includes(filteredName.toLowerCase())
        );

   return (
      <div>
         <Header text="Phonebook" />
         <Search handleFilterByName={handleFilterByName} value={filteredName} />
         <PersonForm
            submithandler={addPerson}
            nameChangeHandler={handleNewName}
            newNameValue={newName}
            numberChangeHandler={handleNewNumber}
            newNumberValue={newNumber}
         />
         <Header text="Numbers" />
         <Person renderedPersons={renderedPersons} />
      </div>
   );
};

export default App;
