import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Task = () => {

  const [date, setDate] = useState(''); {/*date to store current date input*/}
  const [task, setTask] = useState(''); {/*task to store current task input*/}
  const [taskList, setTaskList] = useState([]); {/*tasklist array to store list of task*/}

  /*Update date when date changes*/
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  /*Update task when task changes*/
  const handleTaskeChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    /*Checking if both date and task is entered*/
    if (date && task) {
      setTaskList([...taskList, { date, task }]); /*yes: adds date and task to tasklist*/
      setDate('');
      setTask('');
    }
    else {
      alert("Enter both date and task"); /*no: alert msg*/
    }
  };

  return (
    <div className="container mt-5">
      <form style={{ maxWidth: '400px', margin: 'auto' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className='fw-bolder fs-3 text-center '><u>ADD YOUR TASK</u></label>
        </div>
        <div className="mb-3">
          <label htmlFor="datepick" className="form-label fw-bold fs-4">Select Date</label>
          <input type="date" className="form-control" id="datepick" value={date} onChange={handleDateChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="add" className="form-label fw-bold fs-4">Add Task</label>
          <input type="text" className="form-control" id="add" value={task} onChange={handleTaskeChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className='float-end'>
          <button type="submit" className="btn btn-dark">Back</button>
        </Link>
      </form>

      {taskList.length > 0 && ( /*Table will be dislayed only if there is atleast one item in the tasklist*/
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

export default Task
