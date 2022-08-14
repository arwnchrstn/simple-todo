import React, { useContext, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { TodoContext } from "../context/TodoContext";
import {
  variantHeight,
  variantFade,
  variantSlide
} from "../config/framer_variants";
import TodoItem from "./TodoItem";
import nextId from "react-id-generator";

const TodoContainer = () => {
  const { todoList, setTodoList } = useContext(TodoContext);
  const [filter, setFilter] = useState("");
  const todoId = nextId();
  const filteredList = todoList.filter((todo) => todo.status.includes(filter));

  //add new todo
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (formData.get("new-todo") === "") return;
    setTodoList((prevList) => [
      ...prevList,
      {
        id: todoId + Math.floor(Math.random() * 9999 + 1),
        title: formData.get("new-todo"),
        status: "pending"
      }
    ]);
    e.target.reset();
  };

  //delete all completed todo
  const deleteAllCompleted = () => {
    setTodoList((prevList) =>
      prevList.filter((todo) => todo.status !== "completed")
    );
  };

  return (
    <>
      {/* To do wrapper */}
      <section className="todo-container container">
        <div className="row justify-content-center my-3 my-md-4">
          <div className="col-md-8 col-lg-6 d-flex flex-column">
            {/* Todo main container */}
            <LayoutGroup>
              <motion.div
                layout
                className="todo-container__list shadow rounded"
                variants={variantHeight}
                initial="hidden"
                animate="visible"
                exit="removed"
              >
                {/* Todo header */}
                <motion.div
                  layout
                  className="todo-container__header border-bottom border-1 p-3"
                  variants={variantFade}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="m-0">Todos</h6>
                    <h6 className="m-0">Number of Tasks: {todoList.length}</h6>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control form-control-sm border border-1 border-dark"
                        placeholder="Add Todo"
                        name="new-todo"
                      />
                    </div>
                  </form>

                  <p
                    className="m-0 filter-nav mt-2 text-end"
                    onClick={deleteAllCompleted}
                  >
                    <small>Delete All Completed Task</small>
                  </p>
                </motion.div>

                {/* Todo body */}
                <motion.div
                  layout
                  className="todo-container__contents p-3"
                  variants={variantSlide}
                >
                  {/* Todo filter and delete nav */}
                  <motion.div
                    layout
                    className="d-flex justify-content-center mt-1 mb-4 shadow-sm py-2 text-center"
                    variants={variantSlide}
                  >
                    <p
                      className={`m-0 mx-2 filter-nav ${
                        filter === "" ? "fw-bold" : ""
                      }`}
                      onClick={() => setFilter("")}
                    >
                      <small>All</small>
                    </p>
                    <div className="vr"></div>
                    <p
                      className={`m-0 mx-2 filter-nav ${
                        filter === "pending" ? "fw-bold" : ""
                      }`}
                      onClick={() => setFilter("pending")}
                    >
                      <small>Pending</small>
                    </p>
                    <div className="vr"></div>
                    <p
                      className={`m-0 mx-2 filter-nav ${
                        filter === "completed" ? "fw-bold" : ""
                      }`}
                      onClick={() => setFilter("completed")}
                    >
                      <small>Completed</small>
                    </p>
                  </motion.div>

                  {/* Todo items */}
                  <motion.ul layout className="p-0 m-0" variants={variantSlide}>
                    <AnimatePresence>
                      {/* Map todo list */}
                      {filteredList.length !== 0 &&
                        filteredList.map(
                          (todo) =>
                            todo.status.includes(filter) && (
                              <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                status={todo.status}
                              />
                            )
                        )}

                      {filteredList.length === 0 && (
                        <motion.li
                          layout
                          variants={variantSlide}
                          initial="hidden"
                          animate="visible"
                          exit="removed"
                        >
                          <p className="m-0 mt-3 text-center">
                            <small>No Task To Show</small>
                          </p>
                        </motion.li>
                      )}
                    </AnimatePresence>
                  </motion.ul>
                </motion.div>
              </motion.div>
            </LayoutGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoContainer;
