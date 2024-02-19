import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Task from './components/AddTask';

function App() {
  const [taskList, setTaskList] = useState(() => {
    const storedTaskList = localStorage.getItem('taskList');
    return storedTaskList ? JSON.parse(storedTaskList) : [];
  });

  const updateTaskList = (newTask) => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  const clearAllTasks = () => {
    setTaskList([]);
    localStorage.removeItem('taskList');
  };

  const editTask = (index) => {
    const taskToEdit = taskList[index];

    // Display a prompt for editing the task directly
    const editedDate = prompt('Edit Date:', taskToEdit.date);
    const editedTaskText = prompt('Edit Task:', taskToEdit.task);

    if (editedDate !== null && editedTaskText !== null) {
      const updatedTaskList = [...taskList];
      updatedTaskList[index] = { date: editedDate, task: editedTaskText };
      setTaskList(updatedTaskList);
      localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
    }
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
    localStorage.setItem('taskList', JSON.stringify(updatedTaskList));
  };

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home taskList={taskList} clearAllTasks={clearAllTasks} editTask={editTask} deleteTask={deleteTask} />}
        />
        <Route path='/task' element={<Task updateTaskList={updateTaskList} />} />
      </Routes>
    </Router>
  );
}

export default App;
