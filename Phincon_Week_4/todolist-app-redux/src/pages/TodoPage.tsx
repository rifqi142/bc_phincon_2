import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  clearCompletedTodos,
} from "../features/todo/todoSlice";
import { Todo } from "../features/todo/todoSlice";
import { v4 as uuidv4 } from "uuid";

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [darkMode, setDarkMode] = useState(false);
  const todos = useSelector((state: RootState) => state.todo.todos);

  const desktopLight = "../../public/assets/bg-desktop-light.jpg";
  const desktopDark = "../../public/assets/bg-desktop-dark.jpg";

  const mobileLight = "../../public/assets/bg-mobile-light.jpg";
  const mobileDark = "../../public/assets/bg-mobile-dark.jpg";

  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const todo: Todo = {
        id: uuidv4(),
        text: newTodo,
        completed: false,
      };
      dispatch(addTodo(todo));
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleteTodo = (id: string) => {
    dispatch(completeTodo(id));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompletedTodos());
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <div className="min-h-screen">
        <div>
          <img
            src={darkMode ? desktopDark : desktopLight}
            alt="background"
            className="hidden md:block w-full object-cover"
          />
          <img
            src={darkMode ? mobileDark : mobileLight}
            alt="background"
            className="md:hidden w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center p-5">
          <div className="mt-5 xl:mt-24">
            <div className="flex flex-row justify-between">
              <h2 className="text-white text-4xl font-bold">T O D O</h2>
              <button
                onClick={toggleDarkMode}
                className="text-bright-blue text-2xl"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </div>
            {/* input */}
            <div className="flex justify-center mt-6 shadow-xl">
              <input
                type="text"
                className={`flex-1 p-4 border rounded-l-xl ${
                  darkMode
                    ? "bg-very-dark-desaturated-blue text-light-grayish-blue-dark"
                    : "bg-white text-very-dark-grayish-blue"
                }`}
                placeholder="Create a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddTodo();
                }}
              />
              <button
                onClick={handleAddTodo}
                className={`p-2 rounded-r-lg ${
                  darkMode
                    ? "bg-very-light-gray text-very-dark-grayish-blue"
                    : "bg-bright-blue text-white"
                }`}
              >
                Add
              </button>
            </div>

            {/* list todos */}
            <div className="flex flex-col mt-6 shadow-xl">
              {todos.length === 0 && (
                <p
                  className={`text-center p-4 ${
                    darkMode
                      ? "bg-very-dark-desaturated-blue text-light-grayish-blue-dark"
                      : "bg-white text-very-dark-grayish-blue"
                  }`}
                >
                  No todos, add a new one
                </p>
              )}

              {filteredTodos.map((todo: Todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between p-4 ${
                    darkMode
                      ? "bg-very-dark-desaturated-blue text-light-grayish-blue-dark"
                      : "bg-white text-very-dark-grayish-blue"
                  }`}
                >
                  <div
                    className={`flex items-center gap-4 ${
                      todo.completed ? "line-through" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="form-checkbox text-blue-600 rounded-full"
                      onChange={() => handleCompleteTodo(todo.id)}
                    />
                    <p>{todo.text}</p>
                  </div>
                  <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
                </div>
              ))}

              <div
                className={`flex justify-between items-center p-4 ${
                  darkMode
                    ? "bg-very-dark-desaturated-blue text-light-grayish-blue-dark"
                    : "bg-white text-very-dark-grayish-blue"
                }`}
              >
                <div className="flex gap-4">
                  <p className="text-sm xl:text-base">
                    {todos.filter((todo: Todo) => !todo.completed).length} items
                    left
                  </p>
                  <button
                    onClick={() => setFilter("all")}
                    className={`text-sm xl:text-base ${
                      filter === "all"
                        ? "text-bright-blue"
                        : "text-very-dark-grayish-blue"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter("active")}
                    className={`text-sm xl:text-base ${
                      filter === "active"
                        ? "text-bright-blue"
                        : "text-very-dark-grayish-blue"
                    }`}
                  >
                    Active
                  </button>
                  <button
                    onClick={() => setFilter("completed")}
                    className={`text-sm xl:text-base ${
                      filter === "completed"
                        ? "text-bright-blue"
                        : "text-very-dark-grayish-blue"
                    }`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={handleClearCompleted}
                    className="text-very-dark-grayish-blue text-sm xl:text-base"
                  >
                    Clear Completed
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
