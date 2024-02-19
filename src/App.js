
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);

  const updateTaskList = (newTaskList) => {
    setTaskList(newTaskList);
  };

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
