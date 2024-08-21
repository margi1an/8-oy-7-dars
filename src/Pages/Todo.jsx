import React, { useState, useEffect } from "react";
import "./Todo.css";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, completed: false };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTask("");
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
  };

  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((t) => t.id !== id);
    setTasks(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask} className="add-task-btn">
          Add
        </button>
      </div>

      <ul className="todo-list">
        {tasks.map((t) => (
          <li
            key={t.id}
            className={`todo-item ${t.completed ? "completed" : ""}`}
          >
            <span
              className="todo-text"
              onClick={() => handleCompleteTask(t.id)}
            >
              {t.text}
            </span>
            <button
              onClick={() => handleDeleteTask(t.id)}
              className="delete-task-btn"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
