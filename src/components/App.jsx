import React from "react";
import TodoApp from "./TodoApp";
import { TodoDataProvider } from "../context/TodoContext";
import { ThemeProvider } from "../context/ThemeContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <>
      {/* Change website icon and website title */}
      <HelmetProvider>
        <Helmet>
          <title>Todo App</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>
      <ThemeProvider>
        <TodoDataProvider>
          <TodoApp />
        </TodoDataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
