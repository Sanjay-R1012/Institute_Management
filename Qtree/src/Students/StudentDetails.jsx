import React from 'react'
import Navbar from "../Navbar";

const StudentDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="students-list">
        <table className="student-table">
          <thead>
            <tr>
              <th>student name</th>
              <th>Course </th>
              <th>Timing </th>
              <th>batches No</th>
              <th>enrolled date</th>
              <th>classes finished</th>
              <th>next class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sanjay</td>
              <td>mern stack</td>
              <td>9:00</td>
              <td>50</td>
              <td>14-10-2024</td>
              <td>4</td>
              <td>27-10-2024</td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <hr />
        <table className="student-table">
          <thead>
            <tr>
              <th>Course </th>
              <th>Timing </th>
              <th>staff</th>
              <th>attendance</th>
              <th>topics finished</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mern stack</td>
              <td>9:00</td>
              <td>kishore</td>
              <td>present</td>
              <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, repellat?</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

  )
}

export default StudentDetails