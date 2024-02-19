
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Task from './components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState(() => {
    /*storedTaskList contains the details from the browser's local storage with the key 'taskList'.(stored as string)*/
    const storedTaskList = localStorage.getItem('taskList');
    /*if storedTaskList has values then the string will be converted into js object otherwise empty array will be returned*/
    return storedTaskList ? JSON.parse(storedTaskList) : [];
  }); 

  const updateTaskList = (newTask) => {
    const newTaskList = [...taskList, newTask]; /*creates a new array neTaskList and adds the newTask to the existing task*/
    setTaskList(newTaskList);
    localStorage.setItem('taskList', JSON.stringify(newTaskList)); /*Details in the local storage will be updated(stored as string)*/
  };

  useEffect (() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]); /*the effect will re-run only when the value of taskList changes */
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home taskList={taskList}/>} />
        <Route path='/task' element={<Task updateTaskList={updateTaskList}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
