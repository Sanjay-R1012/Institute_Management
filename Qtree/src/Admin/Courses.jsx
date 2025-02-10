import React from 'react'

const Courses = () => {
  return (
<div className='students-list'>
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
  )
}

export default Courses