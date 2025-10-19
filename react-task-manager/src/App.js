import React, { useState } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import Filter from './Filter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  return (
    <div className="App">
      <div className="app-container">
        <h1>Task Manager</h1>
        <AddTask onAdd={addTask} />
        <Filter onFilter={setFilter} />
        <TaskList tasks={filteredTasks} onEdit={editTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default App;
