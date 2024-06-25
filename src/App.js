import "./App.css";
import Header from "./MyComponent/Header";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponent/AddTodo";
import About from "./MyComponent/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Todos from "./MyComponent/Todos.js";
import Todos from "./MyComponent/Todos.js";
import Footer from "./MyComponent/Footer.js";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")) {
    initTodo = {};
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState([initTodo]);

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding this  todo", title, desc);
    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1]?.sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos((prev) => [...prev, myTodo]);
    console.log(myTodo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Router>
        <Header title="My todos list" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
