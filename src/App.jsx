import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
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
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
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
