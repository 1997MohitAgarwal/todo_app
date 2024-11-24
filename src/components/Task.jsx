import React from "react";

function Task({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <div
      className={`flex items-center justify-between border px-3 py-2 rounded ${
        task.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <span
        className={`flex-1 ${
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => toggleTaskCompletion(task.id)}
        className="text-sm text-green-500 hover:underline mr-4"
      >
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        className="text-sm text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
}

export default Task;
