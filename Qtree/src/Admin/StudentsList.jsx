import React from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StudentsList = () => {

    const navigate =useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])
    const[batchlist,setBatchlist]=useState([])

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
    },[])

    const studentdata = studentlist.map(student => {

        const Course = courselist.filter(
            (course) => student.coursename === course._id
          )


        const Staff = stafflist.filter(
            (staff) => staff._id === student.staff
          )
          
          const filteredbatch = batchlist.filter(
            (batch) => (batch.selectedstudents.includes(student._id)))


          
        return(
            <tr key={student._id}>
                <td>{student.studentname}</td>
                <td>{Course[0].course_name}</td>
                <td>{student.email}</td>
                <td>{student.enrolldate}</td>
                <td>{filteredbatch.length>0 ? filteredbatch[0].batchno : "not assigned"}</td>
                <td>{Staff[0].staffname}</td>
                <td>
                    <button className='table-button'  onClick={() => navigate(`/admin/students/edit/${student._id}/`, { state: student})}>Edit</button>
                </td>
            </tr>
        )
    })


  return (
    <div>
        <Navbar role={localStorage.getItem("role")} />
    <div className='students-list'>
        <button className='btn' onClick={() =>navigate('/admin/students/add/')}>Add Student</button>
        <table className='student-table'>
            <thead>
            <tr>
                <th>Student Name</th>
                <th>Course Name</th>
                <th>Email</th>
                <th>Enrolled Date</th>
                <th>batch No</th>
                <th>staff</th>
                <th>Edit</th>
            </tr>
            </thead>
            <tbody>
                {studentdata}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default StudentsList