import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos-phincon")) || [];
    setTodos(savedTodos);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addTodoHandler = () => {
    if (!task) return;
    let newTodos = [...todos, { task, completed: false }];
    setTodos(newTodos);
    localStorage.setItem("todos-phincon", JSON.stringify(newTodos));
    setTask("");
  };

  const deleteTodos = (index) => {
    let newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
    localStorage.setItem("todos-phincon", JSON.stringify(newTodos));
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "light" ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <h1
          className={`text-center text-xl font-bold mb-4 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          To-Do List
        </h1>

        <button
          onClick={toggleTheme}
          className="w-full mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
        </button>

        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={addTodoHandler}
        >
          Add Task
        </button>

        {todos.length === 0 ? (
          <p
            className={`text-center mt-4 ${
              theme === "light" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            No tasks available
          </p>
        ) : (
          todos.map((todo, index) => (
            <ul className="mt-4" key={index}>
              <li>
                <div
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    theme === "light" ? "bg-gray-200" : "bg-white"
                  }`}
                >
                  <span>{todo.task}</span>
                  <button
                    className="text-red-500"
                    onClick={() => deleteTodos(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
