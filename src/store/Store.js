import { configureStore, createSlice } from "@reduxjs/toolkit";

// Function to load data from LocalStorage
function LoadFromLocalStorage() {
    // Get todos from localStorage (parsing the stored data or return empty array if nothing is found)
    let todos = localStorage.getItem('todos');  
    if (todos) {
        return JSON.parse(todos);  // Parse the data if exists
    }
    return [];  // Return empty array if no data found
}

// Initial state is loaded from localStorage
let todos2 = LoadFromLocalStorage();

// Create the slice
export const slice = createSlice({
  name: "todoSlice",  // Slice ka name
  initialState: todos2,  // Initial state loaded from localStorage
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.length + 1,  // Generate ID based on length
        text: action.payload,  // Adding the text from action payload
      };
      const updatedState = [...state, todo];  // New updated state
      localStorage.setItem("todos", JSON.stringify(updatedState));  // Save updated state to localStorage
      return updatedState;  // Return updated state
    },
    deleteTodo: (state, action) => {
      const updatedState = state.filter((todo) => todo.id !== action.payload);  // Filter out the deleted todo
      localStorage.setItem("todos", JSON.stringify(updatedState));  // Save updated state to localStorage
      return updatedState;  // Return updated state
    },
    UpdateTodo: (state, action) => {
      const updatedState = state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedState));  // Save updated state to localStorage
      return updatedState;  // Return updated state
    }
  },
});

// Export actions
export const { addTodo, deleteTodo, UpdateTodo } = slice.actions;

// Create the store and pass the reducer
export const store = configureStore({
  reducer: {
    todo: slice.reducer,  // Use the slice reducer here
  },
});

// Export the reducer
export default slice.reducer;
