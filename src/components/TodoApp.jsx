import React, { useContext, Suspense, lazy } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import { Spinner } from "react-bootstrap";
const loader = (
  <div className="text-center mt-3 mt-4">
    Loading... <Spinner animation="border" size="sm" />
  </div>
);
const TodoContainer = lazy(() => import("./TodoContainer"));

const TodoApp = () => {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Main app wrapper */}
      <div
        className={`todo-wrapper d-flex flex-column ${
          darkTheme ? "dark-theme" : "light-theme"
        }`}
      >
        {/* Todo components */}
        <AppHeader />
        <Suspense fallback={loader}>
          <TodoContainer />
        </Suspense>
        <AppFooter />
      </div>
    </>
  );
};

export default TodoApp;
