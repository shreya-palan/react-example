// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash} from 'react-icons/fa';

const Home = ({ taskList, clearAllTasks, editTask, deleteTask }) => {
  return (
    <div className='container mt-3 d-flex flex-column align-items-center'>
      <div className='mt-5'>
        <Link to="/task">
          <button type="button" className="btn btn-primary">Add Task</button>
        </Link>
        <button type="button" className="btn btn-danger ms-2" onClick={clearAllTasks}>Clear All</button>
      </div>
      {taskList.length > 0 && (
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
              {taskList.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.task}</td>
                  <td>
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
