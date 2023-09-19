import { useEffect, useState } from "react";
import "./App.css";
import Header from "./AppComponents/Header";
import TodoInput from "./AppComponents/TodoInput";
import TodoListCard from "./AppComponents/TodoListCard";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [List, setList] = useState([]);

  const addListItem = (inputText) => {
    let tempList = List;
    tempList.push(inputText);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setList(tempList);
    toast.success("Task added successfully.", {
      style: {
        border: "1px solid #9ac5f4",
        padding: "16px",
        color: "#9ac5f4",
      },
      iconTheme: {
        primary: "#9ac5f4",
      },
    });
  };

  const deleteListItem = (index) => {
    let tempList = List;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setList(tempList);
    toast.success("Task deleted successfully.", {
      style: {
        border: "1px solid #9ac5f4",
        padding: "16px",
        color: "#9ac5f4",
      },
      iconTheme: {
        primary: "#9ac5f4",
      },
    });
  };

  const UpdateListItem = (index) => {
    var x = List[index];
    setList({ newtask: x });
    // localStorage.setItem("taskList", JSON.stringify(tempList));
    // setList(tempList);
    toast.success("Task updated successfully.", {
      style: {
        border: "1px solid #9ac5f4",
        padding: "16px",
        color: "#9ac5f4",
      },
      iconTheme: {
        primary: "#9ac5f4",
      },
    });
  };

  const color = [
    "#9AC5F4",
    "#18b82d",
    "#ede31f",
    "#7470b5",
    "#f777e8",
    "#f04141",
    "#9e989d",
  ];
  const renderListItem = List.map((listItem, index) => {
    return (
      <TodoListCard
        key={index}
        item={listItem}
        deleteItem={deleteListItem}
        updateItem={UpdateListItem}
        index={index}
        color = {color[index % 7]}
      />
    );
  });

  useEffect(() => {
    let taskList = localStorage.getItem("taskList");
    if (taskList) {
      let arr = JSON.parse(taskList);
      setList(arr);
    }
  }, [List]);

  return (
    <div className="container">
      <Header />
      <TodoInput addListItem={addListItem}  />
      <div className="flex">{List && renderListItem}</div>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
