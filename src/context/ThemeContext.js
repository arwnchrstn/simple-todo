import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const theme = localStorage.getItem("todo-theme");

    if (theme) return JSON.parse(localStorage.getItem("todo-theme"));
    else {
      localStorage.setItem("todo-theme", false);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("todo-theme", darkTheme);
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
