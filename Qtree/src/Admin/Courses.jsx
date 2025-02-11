import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate()
  return (
    <div>
    <Navbar />
<div className='students-list'>
<button className='btn' onClick={() =>navigate('/admin/courses/add/')}>Add Course</button>
    <table className='student-table'>
        <thead>
        <tr>
            <th>Course Name</th>
            <th>Staffs</th>
            <th>Course timing</th>
            <th>Enrolled Students</th>
            <th>more Data</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>Mern stack</td>
                <td>kishore</td>
                <td>90 days</td>
                <td>26</td>
                <td><button>view</button></td>
            </tr>
        </tbody>
    </table>

    </div>
    </div>
  )
}

export default Courses