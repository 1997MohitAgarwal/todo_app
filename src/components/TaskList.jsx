import React from "react";
import Task from "./Task";

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      ))}
      {tasks.length === 0 && <p className="text-center text-gray-500">No tasks yet.</p>}
    </div>
  );
}

export default TaskList;
