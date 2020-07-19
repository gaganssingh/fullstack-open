import React, { useState, useEffect } from "react";

import personService from "./service/persons";
import Header from "./components/Header";
import Search from "./components/Search";
import PersonForm from "./components/PersonForm";
import Person from "./components/Person";
import Notification from "./components/Notification";

const App = () => {
   const [persons, setPersons] = useState([]);
   const [newName, setNewName] = useState("");
   const [newNumber, setNewNumber] = useState("");
   const [filteredName, setFilteredName] = useState("");
   const [message, setMessage] = useState(null);
   const [messageClass, setMessageClass] = useState(null);

   useEffect(() => {
      personService.getAll().then((allPersons) => setPersons(allPersons));
   }, []);

   const addPerson = (event, id) => {
      event.preventDefault();

      if (!newName || !newNumber) {
         setMessage("Please add a name and number");
         setMessageClass("error");
         return;
      }

      let personObject;

      if (persons.find((person) => person.name === newName)) {
         const confirmUpdate = window.confirm(
            `${newName} is already added to phone, replace the old number with a new one?`
         );
         if (confirmUpdate) {
            const personToUpdate = persons.find(
               (person) => person.name === newName
            );
            personObject = { ...personToUpdate, number: newNumber };

            personService
               .update(personObject.id, personObject)
               .then((returnedPerson) => {
                  setPersons(
                     persons.map((person) =>
                        person.id !== personObject.id ? person : returnedPerson
                     )
                  );
                  setNewName("");
                  setNewNumber("");
                  setMessage(
                     `Updated contact information for ${personObject.name}`
                  );
                  setMessageClass("success");
               })
               .catch((error) => {
                  setMessage(`Contact had already been deleted from server`);
                  setMessageClass("error");
               });
         }
      } else {
         personObject = { name: newName, number: newNumber };

         personService.create(personObject).then((addedPerson) => {
            setPersons(persons.concat(addedPerson));
            setNewName("");
            setNewNumber("");
            setMessage(`Added ${personObject.name} to phonebook`);
            setMessageClass("success");
         });
      }

      setTimeout(() => {
         setMessage(null);
         setMessageClass(null);
      }, 3000);
   };

   const deletePerson = (id) => {
      const newPersonsList = persons.filter((person) => person.id !== id);

      const confirmDeletion = window.confirm(
         "Are you sure you want to delete this contact?"
      );

      if (confirmDeletion) {
         personService
            .deletePerson(id)
            .then((response) => {
               setPersons(newPersonsList);
               setMessage(`Deleted contact from phonebook`);
               setMessageClass("success");
            })
            .catch((error) => {
               setPersons(newPersonsList);
               setMessage(`Contact had already been deleted`);
               setMessageClass("error");
            });
      } else {
         return;
      }

      setTimeout(() => {
         setMessage(null);
         setMessageClass(null);
      }, 3000);
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
         <Notification message={message} messageClass={messageClass} />
         <Search handleFilterByName={handleFilterByName} value={filteredName} />
         <PersonForm
            submithandler={addPerson}
            nameChangeHandler={handleNewName}
            newNameValue={newName}
            numberChangeHandler={handleNewNumber}
            newNumberValue={newNumber}
         />
         <Header text="Numbers" />
         <Person
            renderedPersons={renderedPersons}
            deletePerson={deletePerson}
         />
      </div>
   );
};

export default App;
