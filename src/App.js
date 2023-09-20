import { useEffect, useState } from "react";
import "./App.css";
import Header from "./AppComponents/Header";
import TodoListCard from "./AppComponents/TodoListCard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const initialList = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  const [List, setList] = useState(initialList);
  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();

    if (inputText === "") alert("Please enter the task description.");
    else {
      const text = inputText.charAt(0).toUpperCase() + inputText.slice(1);
      setList([...List, text]);
      toast.success("Task added successfully.", {
        style: {
          border: "1px solid #9ac5f4",
          color: "#6ad478",
        },
        iconTheme: {
          primary: "#6ad478",
        },
      });
      setInputText("");
    }
  };

  const EnterPressEvent = (e) => {
    if (e.key === "Enter") addTask(e);
  };

  const deleteTask = (index) => {
    let newList = [...List];
    newList.splice(index, 1);
    setList([...newList]);

    toast.success("Task deleted successfully.", {
      style: {
        border: "1px solid #9ac5f4",
        color: "#f04141",
      },
      iconTheme: {
        primary: "#f04141",
      },
    });
    setInputText("");
  };

  const color = [
    "#9AC5F4",
    "#6ad478",
    "#ede31f",
    "#a5a3d6",
    "#e8a5e0",
    "#f04141",
    "#9e989d",
  ];

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(List));
  }, [List]);

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <form onSubmit={addTask}>
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

            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="flex">
        {List.length === 0 && (
          <div className="noTask">🤩Wohoo, No pending task</div>
        )}
        {List &&
          List.map((task, index) => (
            <TodoListCard
              task={task}
              key={index}
              deleteTask={deleteTask}
              color={color[index % 7]}
            />
          ))}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
