import React from 'react'

const StaffsList = () => {
  return (
        <div className='students-list'>
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
  )
}

export default StaffsList