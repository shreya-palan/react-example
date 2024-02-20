import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Task from './components/AddTask';

function App() {
  const [taskList, setTaskList] = useState(() => { {/*initial value of taskList depends on the value returned by the function*/}
    const storedTaskList = localStorage.getItem('taskList'); /*retreives value associated with taskaList key from the browser's local storage*/
    return storedTaskList ? JSON.parse(storedTaskList) : []; /*if there is taskList then JSON string is converted into JS object,if not it is set to an empty array*/
  });

  const updateTaskList = (newTask) => {
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList));
  };

  const clearAllTasks = () => {
    setTaskList([]); /*seTaskList is a func used to update the taskList by setting it to empty array all the items are removed */
    localStorage.removeItem('taskList'); /*removes all the item from the browser's local storage*/
  };

  const editTask = (index) => {
    const taskToEdit = taskList[index]; /*retrieves task to be editted based on the index*/

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
