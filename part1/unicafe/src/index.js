import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ handleClick, text }) => (
   <button onClick={handleClick}>{text}</button>
);

const Display = ({ text, feedback }) => (
   <p>
      {text}: {feedback}
   </p>
);

const App = () => {
   // save clicks of each button to own state
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const handleGoodFeedback = () => {
      setGood(good + 1);
   };
   const handleNeutralFeedback = () => {
      setNeutral(neutral + 1);
   };
   const handleBadFeedback = () => {
      setBad(bad + 1);
   };

   return (
      <div>
         <h1>give feedback</h1>
         <Button handleClick={handleGoodFeedback} text="good" />
         <Button handleClick={handleNeutralFeedback} text="neutral" />
         <Button handleClick={handleBadFeedback} text="bad" />
         <h2>statistics</h2>
         <Display text="good" feedback={good} />
         <Display text="neutral" feedback={neutral} />
         <Display text="bad" feedback={bad} />
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("root"));
