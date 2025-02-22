import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Staffnavbar from '../Staffnavbar'

const DailyClasses = () => {

  const navigate =useNavigate()

  const[courselist,SetCourselist]=useState([])
  const[stafflist,SetStafflist]=useState([])
  const[studentlist,setStudentlist]=useState([])
  const[batchlist,setBatchlist]=useState([])
  const[report,setReport]=useState([])

  useEffect(() =>{
    const headers ={
      'Content-Type':'Application/Json',
      'Authorization':localStorage.getItem('Bearer')
  }

      axios.get('http://127.0.0.1:3000/course/data/',{headers})
          .then(response =>{ SetCourselist(response.data)
              console.log(response.data)
          })
          .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/staff/data/',{headers})
      .then(response => { 
          SetStafflist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/student/data/',{headers})
      .then(response => { 
          setStudentlist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/batch/data/',{headers})
      .then(response => { 
          setBatchlist(response.data)
           console.log(response.data)
      })
      .catch(error => console.log(error))

      axios.get('http://127.0.0.1:3000/report/data/',{headers})
        .then(response => { 
            setReport(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))
  },[])

  const filteresstaff = stafflist.find((s) => s.email === localStorage.getItem("email"))
  
  const filteredbatch = batchlist.filter(
    (batch) => batch.staff === filteresstaff._id
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

  const reportdata =report.filter((rep) => rep.batch == batch._id)

  const report_list = {
    "batch":batch,
    "reportdata":reportdata,
    "students":selectedStudents,
  }
    

    return(
        <tr key={batch._id}>
            <td>{staff[0].staffname}</td>
            <td>{course[0].course_name}</td>
            <td>{batch.batchno}</td>
            <td>{batch.startingdate}</td>
            <td>{batch.selectedtimerange}</td>
            <td>{st}</td>
            <td>{reportdata.length}</td>
            <td><button className='table-button' onClick={() => navigate(`/admin/staff/report/data/${batch._id}/`, { state: report_list})}>Report</button></td>
        </tr>
    )
})



  return (
    <div>
      <Staffnavbar />
      <div className="students-list">
        {filteredbatch.length !== 0 ?(<table className="student-table">
          <thead>
            <tr>
              <th>Staff name</th>
              <th>Course </th>
              <th>batches No</th>
              <th>Started Date </th>
              <th>Timing </th>
              <th>Students</th>
              <th>Classes Finished</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {classdata}
          </tbody>
        </table>):(<p>no batches assigned</p>)}
      </div>
    </div>
  );
};

export default DailyClasses;
