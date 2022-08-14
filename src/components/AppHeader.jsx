import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaStickyNote, FaMoon, FaSun } from "react-icons/fa";

const AppHeader = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <>
      {/* Header */}
      <header className="shadow-sm">
        <nav className="navbar">
          <div className="container">
            <p className="fw-bold m-0 d-flex align-items-center fs-5">
              <FaStickyNote className="me-2" /> Todo App
            </p>

            <button
              className={`btn btn-dark btn-sm d-flex align-items-center ${
                darkTheme ? "light-theme" : "dark-theme"
              }`}
              onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
            >
              {darkTheme ? (
                <FaSun className="me-2" />
              ) : (
                <FaMoon className="me-2" />
              )}
              {darkTheme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
