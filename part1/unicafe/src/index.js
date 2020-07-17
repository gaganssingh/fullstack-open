import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Statistics from "./Statistics";

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

   const renderStats = (
      <>
         <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            average={(good - bad) / (good + neutral + bad)}
            positive={(good / (good + neutral + bad)) * 100}
         />
         {/* <Statistics text="good" feedback={good} />
         <Statistics text="neutral" feedback={neutral} />
         <Statistics text="bad" feedback={bad} />
         <Statistics text="all" feedback={good + neutral + bad} />
         <Statistics
            text="average"
            average={(good - bad) / (good + neutral + bad)}
         />
         <Statistics
            text="positive"
            positive={(good / (good + neutral + bad)) * 100}
         /> */}
      </>
   );

   return (
      <div>
         <h1>give feedback</h1>
         <Button handleClick={handleGoodFeedback} text="good" />
         <Button handleClick={handleNeutralFeedback} text="neutral" />
         <Button handleClick={handleBadFeedback} text="bad" />
         <h2>statistics</h2>
         {good !== 0 && renderStats}
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById("root"));
