import React from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StaffsList = () => {
    const navigate =useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])

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
    },[])

    const staffdata = stafflist.map(staff => {

        const Course = courselist.filter(
            (course) => staff.handlingcourse === course._id
          )


        const Students = studentlist.filter(
            (student) => student.staff === staff._id
          )


        return(
            <tr key={staff._id}>
                <td>{staff.staffname}</td>
                <td>{Course[0].course_name}</td>
                <td>{staff.joiningdate}</td>
                <td>{Students.length}</td>
                <td>
                    <button className='table-button' onClick={() => navigate(`/admin/staffs/edit/${staff._id}/`, { state: staff})}>Edit</button>
                </td>
            </tr>
        )
    })


  return (
    <div>
        <Navbar />
        <div className='students-list'>
        <button className='btn' onClick={() =>navigate('/admin/staffs/add/')}>Add Staff</button>
        <table className='student-table'>
            <thead>
            <tr>
                <th>staff Name</th>
                <th>Course</th>
                <th>Joined Date </th>
                <th>students count</th>
                <th>More Data</th>
            </tr>
            </thead>
            <tbody>
               {staffdata}
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default StaffsList