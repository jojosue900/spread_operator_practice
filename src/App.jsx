import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function handleChange(e) {
    setUserInput(e.target.value);
    console.log(userInput);
  }
  function handleClick() {
    let newItem = userInput;
    setToDoList([...toDoList, newItem]);
    console.log(toDoList);
    setUserInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          value={userInput}
          placeholder="To-Do...."
          type="text"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoList.map((to_do) => {
            return <li key={Math.random() * 100000}>{to_do}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its stin the input should be
//added to an array.ate should be saved.
//2. When the add button is pressed, the current data
//3. The <ul> should display all the array items as <li>s
// git;
