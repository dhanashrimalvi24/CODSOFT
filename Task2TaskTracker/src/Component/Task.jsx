import React, { useState } from 'react';
import './Task.css';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);

  const InputChange = (event) => {
    setNewTask(event.target.value);
  };

  const Delete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  const AddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          text: newTask,
          completed: false
        }
      ]);
      setNewTask('');
    }
  };


  const Edit = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setNewTask(taskToEdit.text);
    setEditingTaskId(taskId);
  };

  const UpdateTask = () => {
    setTasks(tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, text: newTask };
      }
      return task;
    }));
    setNewTask('');
    setEditingTaskId(null);
  };

  const ToggleComplete = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div className='container'>
      <h1 className='heading'>Task Tracker</h1>
      <input type="text" value={newTask} onChange={InputChange} placeholder="Enter task" className='inp'/>
      {editingTaskId !== null ? (
        <button onClick={UpdateTask}>Update Task</button>
      ) : ( <button onClick={AddTask}>Add Task</button>
      )}
      <ul className='list'>
        {tasks.map(task => (
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} onChange={() => ToggleComplete(task.id)} />
            {task.id === editingTaskId ? (
              <input type="text" value={newTask} onChange={InputChange} />
                 ) : (
              <span className='task' style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            )}
            <button onClick={() => Edit(task.id)}>Edit</button>
            <button onClick={() => Delete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;