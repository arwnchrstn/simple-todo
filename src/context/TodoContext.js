import React, { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoDataProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(() => {
    //check id there are saved todos on the local storage
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) return todos;
    else {
      localStorage.setItem("todos", JSON.stringify([]));
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};
