import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import { variantSlide } from "../config/framer_variants";

const TodoItem = ({ id, title, status }) => {
  const { darkTheme } = useContext(ThemeContext);
  const { setTodoList } = useContext(TodoContext);

  //change status of each todo
  const changeStatus = (e) => {
    if (e.target.checked) {
      setTodoList((prevList) =>
        prevList.map((todo) =>
          todo.id === e.target.value ? { ...todo, status: "completed" } : todo
        )
      );
    } else {
      setTodoList((prevList) =>
        prevList.map((todo) =>
          todo.id === e.target.value ? { ...todo, status: "pending" } : todo
        )
      );
    }
  };

  //delete individual todo
  const deleteTodo = (e) => {
    setTodoList((prevList) =>
      prevList.filter((todo) => todo.id !== e.target.getAttribute("id"))
    );
  };

  return (
    <motion.li
      layout
      key="todo-item"
      className="todo-row shadow-sm p-2 rounded d-flex justify-content-between align-items-center"
      variants={variantSlide}
      initial="hidden"
      animate="visible"
      exit="removed"
    >
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input m-0 me-2"
          value={id}
          id={id}
          checked={
            (status === "pending" && false, status === "completed" && true)
          }
          onChange={changeStatus}
        />
        <label
          htmlFor={id}
          className={`m-0 ${
            status === "completed"
              ? "text-decoration-line-through text-muted"
              : ""
          }`}
        >
          {title}
        </label>
      </div>

      <small
        className={`m-0 delete-todo d-none ${
          darkTheme ? "text-light" : "text-dark"
        }`}
        id={id}
        onClick={deleteTodo}
      >
        Delete
      </small>
    </motion.li>
  );
};

export default TodoItem;
