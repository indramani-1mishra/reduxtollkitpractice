import { configureStore, createSlice } from "@reduxjs/toolkit";

// Step 1: Create the slice
export const slice = createSlice({
  name: "todoSlice",  // Slice ka name
  initialState: [],  // Initial state as empty array
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.length + 1,  // Generating ID based on the length
        text: action.payload,  // Adding the text from action payload
      };
      return [...state, todo];  // Returning updated state with new todo
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);  // Deleting todo based on ID
    },
    UpdateTodo: (state, action) => {
        return state.map((todo) =>
            todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
        );
    }
    
  },
});

// Step 2: Export the actions
export const { addTodo, deleteTodo,UpdateTodo } = slice.actions;

// Step 3: Create the store and pass the reducer
export const store = configureStore({
  reducer: {
    todo: slice.reducer,  // Use the slice reducer here
  },
});

export default slice.reducer;
