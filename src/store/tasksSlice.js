import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.tasks.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      })
    },

    toggleComplete(state, action) {
      const toggledTask = state.tasks.find(task =>
        task.id === action.payload.id);
      toggledTask.completed = !toggledTask.completed;
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter(task =>
        task.id !== action.payload.id);
    },
  }
})

export const {
  addTask,
  toggleComplete,
  removeTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;