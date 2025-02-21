import Navbar from '../Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentDetails = () => {

  const navigate =useNavigate()

  const[courselist,SetCourselist]=useState([])
  const[stafflist,SetStafflist]=useState([])
  const[studentlist,setStudentlist]=useState([])
  const[batchlist,setBatchlist]=useState([])
  const[reportlist,setReportlist]=useState([])

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

      axios.get('http://127.0.0.1:3000/report/data/')
        .then(response => { 
            setReportlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))
  },[])

  const studentdata = () =>{
   if(studentlist.length != 0){
    const student = studentlist.find((st) => st._id == '67aee2ef1a224623c73c9b1d')
    console.log(student)

    const batch = batchlist.find((b) => b.selectedstudents.includes('67aee2ef1a224623c73c9b1d'))
    console.log(batch)

    const staff = stafflist.find((s) => s._id == student.staff)
    console.log(staff)

    const course = courselist.find((c) => c._id == student.coursename)
    console.log(course)

    const report = reportlist.filter((r) => r.batch == batch._id)
    console.log(report)

    const dailyreport =report.map((report,index) => {

     return <table key={index} className="student-table">
          <thead>
              <tr>
                  <th>Date</th>
                  <th>DailyTask</th>
                  <th>Studentname</th>
                  <th>Attendace</th>
              </tr>
          </thead>
          <tbody>
          <tr key={index}>
              <td>{report.date}</td>
              <td>{report.todayactivity}</td>
              <td>{student.studentname}</td>
              <td>{report.attendance[student._id] ? "Present" : "Absent"}</td>
          </tr>
          </tbody>
      </table>
      
  })

    return <div>
      <h2>Student Information</h2>
      <div className='student-data-group'>
      <p><strong>Student Name:</strong> {student.studentname}</p>
      <p><strong>Course Name:</strong> {course ? course.course_name : "Course not found"}</p>
      <p><strong>Staff Name:</strong> {staff ? staff.staffname : "Staff not found"}</p>
      <p><strong>Batch No:</strong> {batch ? batch.batchno : "Batch not found"}</p>
      <p><strong>Enrolled Date:</strong> {student.enrolldate}</p>
      <p><strong>Class Type:</strong> {student.classtype}</p>
      <p><strong>Class Time:</strong> {batch ? batch.selectedtimerange : "Class time not found"}</p>
      <p><strong>Classes Finished:</strong> {report.length}</p>
      </div>
      {dailyreport}
    </div>
  }
  }

  

  const data =studentdata()


  return (
    <div>
      <div className="students-report-list">
        {data}
        </div>
      </div>

  )
}

export default StudentDetails