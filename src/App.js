
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Task from './components/Task';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/task' element={<Task />}/>
      </Routes>
    </Router>
  );
}

export default App;
