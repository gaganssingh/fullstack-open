import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";

const store = [
   { name: "Arto Hellas", number: "040-123456" },
   { name: "Ada Lovelace", number: "39-44-5323523" },
   { name: "Dan Abramov", number: "12-43-234345" },
   { name: "Mary Poppendieck", number: "39-23-6423122" },
];

const App = () => {
   const [persons, setPersons] = useState(store);
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");
   const [filteredName, setFilteredName] = useState("");

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
