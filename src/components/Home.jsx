import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash} from 'react-icons/fa';

/*props are recieved from the parent component(App)*/
const Home = ({ taskList, clearAllTasks, editTask, deleteTask }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = taskList.filter(
    (task) =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mt-3 d-flex flex-column align-items-center'>
      <h1 className='display-4 mb-4 font-weight-bolder'>TASK TRACKER</h1>
      <div className='mt-5'>
        <Link to="/task">
          <button type="button" className="btn btn-primary">Add Task</button>
        </Link>
        <button type="button" className="btn btn-danger ms-2" onClick={clearAllTasks}>Clear All</button>
      </div>
      <div className="mt-3">
        <input type="text" placeholder='Search by name' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='form-control'/>
      </div>
      {filteredTasks.length > 0 && ( /*if tasklist has one details then table with details will be displayed otherwise nothing will be rendered*/
        <div className="mt-5 text-md-center">
          <table className='table table-info table-hover table-bordered' style={{ maxWidth: '600px', margin: 'auto' }}>
            <thead>
              <tr>
                <th scope='col' className='border' style={{ backgroundColor: '#4f6ec9', color: 'white' }}>Date</th>
                <th scope='col' className='border' style={{ backgroundColor: '#4f6ec9', color: 'white' }}>Task</th>
                <th scope='col' className='border' style={{ backgroundColor: '#4f6ec9', color: 'white' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((item, index) => ( /*map function iterate over each item in the tasklist array*/
                <tr key={index}> {/*for each task row i created. key is a unique identifier for each row*/}
                  <td>{item.date}</td> {/*1st cell displays date*/}
                  <td>{item.task}</td> {/*2nd cell displays task*/}
                  <td> {/*3rd cell for edit and delete opt*/}
                    <span className="mx-2" style={{ cursor: 'pointer' }} onClick={() => editTask(index)}>
                      <i><FaEdit /></i>
                    </span>
                    <span className="mx-2" style={{ cursor: 'pointer' }} onClick={() => deleteTask(index)}>
                      <i><FaTrash /></i>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home;
