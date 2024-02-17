import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mt-3'>
        <Link to="/task">
            <button type="button" className="btn btn-primary">Add Task</button>
        </Link>
    </div>
  )
}
export default Home
