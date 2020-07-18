import React, { useState } from "react";
import ReactDOM from "react-dom";
const SectionHeading = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
   <button onClick={props.handleClick}>{props.text}</button>
);

const MostVotedAnecdote = (props) => {
   const { anecdotes, votes } = props;
   const mostVotedIndex = votes.indexOf(Math.max(...votes));

   return (
      <div>
         <p>{anecdotes[mostVotedIndex]}</p>
         <p>has {votes[mostVotedIndex]} votes</p>
      </div>
   );
};

const App = (props) => {
   const [selected, setSelected] = useState(0);
   const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0));

   const displayNextRandomAnecdote = () => {
      let randomIndex = Math.floor(Math.random() * props.anecdotes.length);
      setSelected(randomIndex);
   };

   const voteAnecdote = () => {
      // Copy the current array in the points state
      const copy = [...votes];

      // Increase the vote/point for the currently selected anecdote
      copy[selected] = copy[selected] + 1;
      setVotes(copy);
   };

   return (
      <div>
         <SectionHeading text="Anecdote of the day" />
         <p>{props.anecdotes[selected]}</p>
         <p>has {votes[selected]} votes</p>
         <Button handleClick={voteAnecdote} text="Vote" />
         <Button handleClick={displayNextRandomAnecdote} text="Next Anecdote" />
         <SectionHeading text="Anecdote with most votes" />
         <MostVotedAnecdote anecdotes={props.anecdotes} votes={votes} />
      </div>
   );
};

const anecdotes = [
   "If it hurts, do it more often",
   "Adding manpower to a late software project makes it later!",
   "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
   "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
   "Premature optimization is the root of all evil.",
   "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
