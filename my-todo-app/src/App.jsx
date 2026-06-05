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

  const incompleteCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="app">
      <nav>
        <button onClick={() => setView('todo')}>📝 To-Do List</button>
        <button onClick={() => setView('counter')}>🎯 Лічильник</button>
      </nav>

      {view === 'todo' && (
        <div className="todo-container">
          <h1>📋 Мій To-Do List</h1>
          <TaskForm addTask={addTask} />
          {tasks.length === 0 && (
            <div className="task-stats">✨ Немає завдань. Додайте перше!</div>
          )}
          <ul>
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
          </ul>
          {tasks.length > 0 && (
            <div className="task-stats">
              📊 Залишилось невиконаних: {incompleteCount} з {tasks.length}
            </div>
          )}
        </div>
      )}

      {view === 'counter' && <CounterWithStep />}

      <footer style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
        🚀 Задеплоєно на GitHub Pages | React + Vite
      </footer>
    </div>
  );
}

export default App;