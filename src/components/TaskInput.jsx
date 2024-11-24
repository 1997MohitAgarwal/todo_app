import React, { useState } from "react";

function TaskInput({ addTask,setError,error }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTask(input);
      setInput("");
    } else {
        setError("Input Field is empty. Please enter your todo task.");
        setTimeout(()=>{
           setError("")
        },2000)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 border rounded px-2 py-1"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
      <p className="text-xs text-red-500 mb-5">{error}</p>
    </>
  );
}

export default TaskInput;
