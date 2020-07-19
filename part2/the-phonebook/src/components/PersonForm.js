import React from "react";

const PersonForm = (props) => (
   <form onSubmit={props.submithandler}>
      <h2>Add a new number</h2>
      <div>
         name:{" "}
         <input
            id="name"
            onChange={props.nameChangeHandler}
            value={props.newNameValue}
         />
      </div>
      <div>
         number:{" "}
         <input
            onChange={props.numberChangeHandler}
            value={props.newNumberValue}
         />
      </div>
      <div>
         <button type="submit">add</button>
      </div>
   </form>
);

export default PersonForm;
