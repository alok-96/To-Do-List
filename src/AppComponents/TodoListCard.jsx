import React from "react";
import { BiSolidTrash } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";

const TodoListCard = (props) => {

  return (
    <div className="todoCard" style={{ borderColor: `${props.color}` }}>
      <div className="taskInfo">
        <div className="desc">{props.task}</div>
        <div className="actions">
          <MdOutlineEdit
            size={"21px"}
            cursor={"pointer"}
            color={props.color}
            onClick={(e) => {
              props.updateTask(props.index);
            }}
          />
          <BiSolidTrash
            size={"21px"}
            cursor={"pointer"}
            color={props.color}
            onClick={(e) => {
              props.deleteTask(props.index);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
