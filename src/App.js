import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTask] = useState([
    'Buy shopping',
    'Clean bathroom',
    'Car s MOT',
  ]);

  //const tasksObject = tasks.map((task, index) => ({ id: index, title: task }));

  const taskNodes = tasks.map((task, index) => {
    return (
      <li key={index}>
        <span>{task}</span>
      </li>
    );
  });

  const [newTask, setNewTask] = useState('');

  const handleTaskInput = (event) => setNewTask(event.target.value);

  const saveNewTask = (event) => {
    event.preventDefault();
    const copyTask = [...tasks, newTask];
    setTask(copyTask);
    setNewTask('');
  };
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
          value={newTask}
          onChange={handleTaskInput}
          placeholder='e.g Walk the dog'
        />
        <input type='submit' value='Save New Task' />
      </form>
    </div>
  );
}

export default App;
