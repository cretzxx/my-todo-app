import { useState } from 'react';
import TaskForm from './components/Todo/TaskForm';
import TaskItem from './components/Todo/TaskItem';
import CounterWithStep from './components/Task1_Counter/CounterWithStep';
import './App.css';

function App() {
  const [view, setView] = useState('todo');
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setView('todo')}>📋 To-Do List</button>
        <button onClick={() => setView('counter')}>🔢 Лічильник (завд.1)</button>
      </nav>

      {view === 'todo' && (
        <div className="todo-container">
          <h1>Мій To-Do List на React</h1>
          <TaskForm addTask={addTask} />
          <ul>
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </ul>
        </div>
      )}

      {view === 'counter' && <CounterWithStep />}
    </div>
  );
}

export default App;