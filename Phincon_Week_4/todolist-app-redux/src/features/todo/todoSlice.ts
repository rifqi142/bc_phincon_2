import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    // Delete a todo
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Mark a todo as complete/incomplete
    completeTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // clear all completed todos
    clearCompletedTodos: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, clearCompletedTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
