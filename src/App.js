import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([
    { title: 'Buy groceries', priority: 'High' },
    { title: 'Clean the BBP', priority: 'Low' },
    { title: 'Walk the cat', priority: 'Low' },
    { title: 'Get some new shoes', priority: 'High' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const [newTaskPriority, setNewTaskPriority] = useState('');

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index}>
        <span
          className={
            task.priority === 'High' ? 'high-priority' : 'low-priority'
          }
        >
          {task.title}
        </span>
      </li>
    );
  });

  const handleTaskInput = (event) => setNewTaskTitle(event.target.value);

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTask = [
      ...tasks,
      { title: newTaskTitle, priority: newTaskPriority },
    ];
    setTask(copyTask);
    setNewTaskTitle('');
  };

  const handleTaskPriority = (event) => setNewTaskPriority(event.target.value);

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <hr></hr>
      <ul>{taskNodes}</ul>
      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Add a new Task:</label>
        <input
          id='new-task'
          type='text'
          value={newTaskTitle}
          onChange={handleTaskInput}
          required
          placeholder='e.g Walk the dog'
        />
        <div>
          <input
            type='radio'
            id='high'
            name='priority'
            value='High'
            onChange={handleTaskPriority}
          ></input>
          <label htmlFor='high'>High</label>
          <input
            type='radio'
            id='low'
            name='priority'
            value='Low'
            onChange={handleTaskPriority}
          ></input>
          <label htmlFor='low'>Low</label>
        </div>
        <input className='submit-btn' type='submit' value='Save New Task' />
      </form>
    </div>
  );
}

export default App;
