import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodos, setEditTodos] = useState(null);
  const [editContent, setEditContent] = useState("");

  // getting todos from localStorage
  useEffect(() => {
    const todosData = localStorage.getItem("todos");
    const localTodos = JSON.parse(todosData);

    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  // saving all the todos to localStorage
  useEffect(() => {
    const data = JSON.stringify(todos);
    localStorage.setItem("todos", data);
  }, [todos]);

  // submit function
  function submitTodo(e) {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      content: todo,
      done: false,
    };

    if (newTodo.content === "") {
      alert("Please enter some task");
    } else {
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  }

  // delete todos function
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // completed todos function
  function doneTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  // edit todos function
  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.content = editContent;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setEditTodos(null);
    setEditContent("");
  }

  return (
    <main className="h-full todo__section">
      <div className="h-full p-4 text-center md:p-8 todo">
        <form
          className="flex flex-col items-center justify-center gap-4 p-4 todo__form xl:flex-row md:flex-row"
          onSubmit={submitTodo}
        >
          <input
            type="text"
            name="input__todo"
            id="input__todo"
            className="w-full px-2 py-1 text-xl border-b-2 border-white outline-none bg-darkGrey md:w-96"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-6 py-1 text-base bg-white border-2 border-white md:py-2 md:text-xl md:px-7 text-darkGrey submit__btn"
          >
            Add
          </button>
        </form>

        <section className="flex flex-col items-center justify-center gap-2 p-3 md:gap-4 md:p-6 todos__section">
          {todos.map((task) => (
            <div
              className="flex items-center justify-center w-full gap-1 px-4 py-2 border-2 border-white md:gap-2 md:px-8 md:py-4 xl:w-1/2 task"
              key={task.id}
            >
              <div className="flex items-center w-full px-0 py-1 md:py-2 content">
                {editTodos === task.id ? (
                  <input
                    type="text"
                    name="edit__todo"
                    id="edit__todo"
                    className="w-full px-1 py-1 text-sm border-b-2 border-white outline-none md:px-2 md:text-base bg-darkGrey"
                    onChange={(e) => setEditContent(e.target.value)}
                    value={editContent}
                    autoComplete="off"
                  />
                ) : (
                  <div className="flex items-center gap-2 md:gap-4 main">
                    <input
                      type="checkbox"
                      name="done__todo"
                      id="done__todo"
                      onChange={() => doneTodo(task.id)}
                      checked={task.done}
                    />
                    <p className="text-base md:text-xl">{task.content}</p>
                  </div>
                )}
              </div>
              <button
                className="px-4 py-2 ml-2 text-sm md:py-3 md:ml-4 md:text-base md:px-7 bg-lightGrey"
                onClick={() => deleteTodo(task.id)}
              >
                Delete
              </button>
              {editTodos === task.id ? (
                <button
                  className="px-4 py-2 ml-2 text-sm md:py-3 md:ml-4 md:text-base md:px-7 bg-lightGrey"
                  onClick={() => editTodo(task.id)}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="px-4 py-2 ml-2 text-sm md:py-3 md:ml-4 md:text-base md:px-7 bg-lightGrey"
                  onClick={() => setEditTodos(task.id)}
                >
                  Edit
                </button>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};
