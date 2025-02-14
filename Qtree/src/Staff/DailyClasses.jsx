import React from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DailyClasses = () => {

  const navigate =useNavigate()

  const[courselist,SetCourselist]=useState([])
  const[stafflist,SetStafflist]=useState([])
  const[studentlist,setStudentlist]=useState([])
  const[batchlist,setBatchlist]=useState([])

  useEffect(() =>{
      axios.get('http://127.0.0.1:3000/course/data/')
          .then(response =>{ SetCourselist(response.data)
              console.log(response.data)
          })
          .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/staff/data/')
      .then(response => { 
          SetStafflist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/student/data/')
      .then(response => { 
          setStudentlist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/batch/data/')
      .then(response => { 
          setBatchlist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))
  },[])

  const filteredbatch = batchlist.filter(
    (batch) => batch.staff === "67ad908dfed51cd3aa8ebd52"
  )

  const classdata = filteredbatch.map(batch => {

    const staff =stafflist.filter((staff) => staff._id === batch.staff)
    const course =courselist.filter((course) => course._id === batch.coursename)
    const selectedStudentIds = batch.selectedstudents;

    const selectedStudents = studentlist.filter(student => 
      selectedStudentIds.includes(student._id)
  )
    console.log("students",selectedStudents)

    const st = selectedStudents.map(student => (
          <p key={student._id}>{student.studentname}</p>
  ))
    

    return(
        <tr key={batch._id}>
            <td>{staff[0].staffname}</td>
            <td>{course[0].course_name}</td>
            <td>{batch.batchno}</td>
            <td>{batch.startingdate}</td>
            <td>{batch.selectedtimerange}</td>
            <td>{st}</td>
        </tr>
    )
})



  return (
    <div>
      <Navbar />
      <div className="students-list">
        <table className="student-table">
          <thead>
            <tr>
              <th>Staff name</th>
              <th>Course </th>
              <th>batches No</th>
              <th>Started Date </th>
              <th>Timing </th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {classdata}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DailyClasses;
