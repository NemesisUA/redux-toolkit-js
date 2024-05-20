import { useDispatch } from 'react-redux'
import './App.css'
import { addTask } from './store/tasksSlice';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTask({ text }));
      setText('');
    }
  }

  return (
    <div className="App">
      <h1>My tasks</h1>

      <label>
        <input
          placeholder='new task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAction}>Add todo</button>
      </label>

      <TaskList />
    </div>
  )
}

export default App