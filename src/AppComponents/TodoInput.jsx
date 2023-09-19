import React, { useState } from "react";

export default function TodoInput(props) {
  const [inputText, setInputText] = useState("");

  const addTask = () => {
    if (inputText === "") alert("Please enter the task description.");
    else {
      const text = inputText.charAt(0).toUpperCase() + inputText.slice(1);
      props.addListItem(text);
      console.log(text);
      setInputText("");
    }
  };

  const EnterPressEvent = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <div className="main-content">
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          placeholder="Enter your task here"
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          onKeyDown={EnterPressEvent}
        />

        <button
          className="btn"
          onClick={() => {
            addTask();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
