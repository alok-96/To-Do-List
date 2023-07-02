import React from "react";
import trash from "../assets/trash-can-solid.svg";

const TodoList = (props) => {
  return (
    <div className="main-content">
      <li className="list-item flex">
        <div className="task-info">{props.item}</div>
        <div className="actions flex">
          <img src={trash} alt="trash-icon" className="icon" 
          onClick={e => {
            props.deleteItem(props.index);
          }}
          />
        </div>
      </li>
    </div>
  );
};

export default TodoList;
