import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const StaffsList = () => {
    const navigate =useNavigate()
  return (
    <div>
        <Navbar />
        <div className='students-list'>
        <button className='btn' onClick={() =>navigate('/admin/staffs/add/')}>Add Staff</button>
        <table className='student-table'>
            <thead>
            <tr>
                <th>staff Name</th>
                <th>staff id</th>
                <th>Course </th>
                <th>Joined Date </th>
                <th>batches Finished</th>
                <th>More Data</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sanjay</td>
                    <td>g5we565q</td>
                    <td>mern stack</td>
                    <td>14-10-2024</td>
                    <td>50</td>
                    <td><button>View</button></td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default StaffsList