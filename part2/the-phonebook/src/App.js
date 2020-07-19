import React, { useState, useEffect } from "react";

import personService from "./service/persons";
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
      personService.getAll().then((allPersons) => setPersons(allPersons));
   }, []);

   const addPerson = (event) => {
      event.preventDefault();
      if (persons.find((person) => person.name === newName)) {
         alert(`${newName} is already added to the phonebook`);
         return;
      }

      if (!newName || !newNumber) {
         return "Please add a name and a number";
      }

      const personObject = { name: newName, number: newNumber };

      personService.create(personObject).then((addedPerson) => {
         setPersons(persons.concat(addedPerson));
         setNewName("");
      });
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
