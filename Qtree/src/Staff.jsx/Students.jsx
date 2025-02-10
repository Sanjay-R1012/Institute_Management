import React from 'react'

const Students = () => {
  return (
    <div className='students-list'>
    <table className='student-table'>
        <thead>
        <tr>
            <th>Student Name</th>
            <th>Student id</th>
            <th>Course Name</th>
            <th>Enrolled Date</th>
            <th>batch No</th>
            <th>Classes Finished</th>
            <th>Class type</th>
            <th>Class Timing</th>
            <th>syllabus covered</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>sanjay</td>
                <td>g5we565q</td>
                <td>mern stack</td>
                <td>14-10-2024</td>
                <td>50</td>
                <td>26</td>
                <td>offline</td>
                <td>9:00pm</td>
                <td><button>view</button></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Students