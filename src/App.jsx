import { useEffect, useState } from "react";
import "./App.css";
import Header from "./AppComponents/Header";
import TodoListCard from "./AppComponents/TodoListCard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const initialList = localStorage.getItem("taskList")
    ? JSON.parse(localStorage.getItem("taskList"))
    : [];

  const [list, setList] = useState(initialList);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [taskIndex, setTaskIndex] = useState(-1);

  const addTask = (e) => {
    e.preventDefault();
    setError(false);

    if (inputText === "") {
      toast("Please enter task description.", {
        icon: "⚠️",
        style: {
          color: "#cf9a29",
        },
      });
    } else {
      const text = inputText.charAt(0).toUpperCase() + inputText.slice(1);
      if(taskIndex >= 0)
      {
        list[taskIndex] = text; 
        toast.success('Task updated successfully.', {
          style: {
            color: "#6ad478",
          },
          iconTheme: {
            primary: "#6ad478",
          },
        });
        setTaskIndex(-1);
      }
      else{
        setList([...list, text]);
        toast.success('Task added successfully.', {
        style: {
          color: "#6ad478",
        },
        iconTheme: {
          primary: "#6ad478",
        },
      });
      }
      setInputText("");
    }
  };

  const EnterPressEvent = (e) => {
    if (e.key === "Enter") addTask(e);
  };

  const deleteTask = (index) => {
    let newList = [...list];
    newList.splice(index, 1);
    setList([...newList]);

    toast.success("Task deleted successfully.", {
      style: {
        color: "#6ad478",
      },
      iconTheme: {
        primary: "#6ad478",
      },
    });
    setInputText("");
  };

  const updateTask = (index) => {
    setTaskIndex(index);
    setInputText(list[index]);
  }

  const color = [
    "#9ac5f4",
    "#6ad478",
    "#ede31f",
    "#a5a3d6",
    "#e8a5e0",
    "#f76565",
    "#9e989d",
  ];

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

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
                setCharacterCount(e.target.value.length);
                if (e.target.value.length > 160) {
                  setError(true);
                } else {
                  setError(false);
                  setInputText(e.target.value);
                }
              }}
              onKeyDown={EnterPressEvent}
            />

            <button type="submit" className="btn">
              {taskIndex >= 0 ? "Update" : "Add"}
            </button>
          </div>
          <div className="validation">
            <div id="error">
              {error ? "Task description can't exceed 160 characters." : null}
            </div>
            <div id="charcter-count"> {inputText && `(${characterCount}/160)`}</div>
          </div>
        </form>
      </div>
      <div className="flex">
        {list.length === 0 && (
          <div className="noTask">🤩Wohoo, No pending task</div>
        )}
        {list &&
          list.map((task, index) => (
            <TodoListCard
              task={task}
              key={index}
              index={index}
              updateTask={updateTask}
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
