import React from "react";
import { BiSolidTrash } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";

const TodoListCard = (props) => {
  return (
    <div className="todoCard" style={{ borderColor: `${props.color}` }}>
      <div className="taskInfo">
        <div className="desc">{props.item}</div>
        <div className="actions">
          <FaRegEdit
            size={"21px"}
            cursor={"pointer"}
            color={props.color}
            onClick={(e) => {
              props.updateItem(props.index);
            }}
          />
          <BiSolidTrash
            size={"21px"}
            cursor={"pointer"}
            color={props.color}
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListCard;
