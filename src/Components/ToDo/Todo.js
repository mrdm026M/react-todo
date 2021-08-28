import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./Todo.scss";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodos, setEditTodos] = useState(null);
  const [editContent, setEditContent] = useState("");
  //   const [donetodos, setDoneTodos] = useState([]);

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

    setTodos([...todos].concat(newTodo));
    setTodo("");
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

  // setDoneTodos([...donetodos].concat(updatedTodos));

  // const completedTodos = [...todos].filter((todo) => todo.done === true);

  // setTodos(completedTodos);

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
    <main className="border-2 border-blue-600 todo__section">
      <div className="todo">
        <form className="todo__form" onSubmit={submitTodo}>
          <input
            type="text"
            name="input__todo"
            id="input__todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" className="submit__btn">
            Add
          </button>
        </form>

        <section className="todos__section">
          {todos.map((task) => (
            <div className="task" key={task.id}>
              {editTodos === task.id ? (
                <input
                  type="text"
                  name="edit__todo"
                  id="edit__todo"
                  onChange={(e) => setEditContent(e.target.value)}
                  value={editContent}
                />
              ) : (
                <p>{task.content}</p>
              )}

              <button onClick={() => deleteTodo(task.id)}>Delete</button>
              <input
                type="checkbox"
                name="done__todo"
                id="done__todo"
                onChange={() => doneTodo(task.id)}
                checked={task.done}
              />
              {editTodos === task.id ? (
                <button onClick={() => editTodo(task.id)}>Submit</button>
              ) : (
                <button onClick={() => setEditTodos(task.id)}>Edit</button>
              )}
            </div>
          ))}
        </section>

        {/* <section className="done__todos__section">
          {donetodos.map((doneTask) => (
            <div className="done__task" key={doneTask.id}>
              <p>{doneTask.content}</p>
            </div>
          ))}
        </section> */}
      </div>
    </main>
  );
};
