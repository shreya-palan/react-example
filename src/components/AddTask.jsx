import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Task = ({ updateTaskList }) => { 

  const navigate = useNavigate();
  const [date, setDate] = useState(''); {/*date to store current date input*/}
  const [task, setTask] = useState(''); {/*task to store current task input*/}
  

  /*Update date when date changes*/
  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  /*Update task when task changes*/
  const handleTaskeChange = (e) => {
    setTask(e.target.value);
  }

  /*Called when form is submitted*/
  const handleSubmit = (e) => {
    e.preventDefault();

    /*Checking if both date and task is entered*/
    if(!date && !task){
      alert("Enter both date and task");
    }else if(!date){
      alert("Enter date");
    }else if(!task){
      alert("Enter task");
    }else{
      const newTask = {date, task};
      updateTaskList(newTask); /*updates the tasklist with the new task*/
      setDate('');
      setTask('');
      navigate('/');
    }
    };

  return (
    <div className="container mt-5 ">
      <div className="mb-3 text-center mb-5">
          <label className='fw-bolder fs-3 '><u>ADD YOUR TASK</u></label>
        </div>
      <form style={{ maxWidth: '400px', margin: 'auto',}} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="datepick" className="form-label fw-bold fs-4"  style={{color: '#4f6ec9'}}>Select Date</label>
          <input type="date" className="form-control" id="datepick" value={date} onChange={handleDateChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="add" className="form-label fw-bold fs-4 "  style={{color: '#4f6ec9'}}>Add Task</label>
          <input type="text" className="form-control" id="add" value={task} onChange={handleTaskeChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Task