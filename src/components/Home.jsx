import React from 'react';
import { Link } from 'react-router-dom';


const Home = ({taskList}) => { {/*taskList to display the list of tasks added*/}
  return (
    <div className='container mt-3'>
        <Link to="/task">
            <button type="button" className="btn btn-primary">Add Task</button>
        </Link>

        {taskList.length > 0 && (
          <div className="mt-5 text-md-center">
          <table className='table table-info table-hover table-bordered' style={{ maxWidth: '400px', margin: 'auto' }}>
            <thead>
              <tr>
                <th scope='col' className='border'>Date</th>
                <th scope='col' className='border'>Task</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((item, index) => ( /*For each item in the tasklist the below code will be applied*/
                <tr key={index}>   {/*index is the current item in the array*/}
                  <td>{item.date}</td>
                  <td>{item.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
    </div>
  )
}
export default Home
