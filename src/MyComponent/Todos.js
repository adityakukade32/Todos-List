import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let myStyle = {
    minHeight: "05vh ",
    margin: "40px auto",
  };

  return (
    <div className="container my-3">
      <h3 className=" my-3" style={myStyle}>
        Todos list
      </h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo?.sno || Math.random()}
                onDelete={props.onDelete}
              />
            );
          })}
    </div>
  );
};

export default Todos;
