import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'

const Courses = () => {
    const navigate = useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])

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
    },[])

    const coursedata = courselist.map(course => {
        const Students = studentlist.filter(
            (student) => student.coursename === course._id
          )

        const Staffs = stafflist.filter(
            (staff) => staff.handlingcourse === course._id
          )

        return(
            <tr key={course._id}>
                <td>{course.course_name}</td>
                <td>{Staffs.length}</td>
                <td>{course.duration}</td>
                <td>{Students.length}</td>
                <td>
                    <button onClick={() => navigate(`/admin/course/edit/${course._id}/`, { state: course})}>Edit</button>
                </td>
            </tr>
        )
    })

  return (
    <div>
    <Navbar />
<div className='students-list'>
<button className='btn' onClick={() =>navigate('/admin/courses/add/')}>Add Course</button>
    <table className='student-table'>
        <thead>
        <tr>
            <th>Course Name</th>
            <th>Staffs</th>
            <th>Course Duration</th>
            <th>Enrolled Students</th>
            <th>more Data</th>
        </tr>
        </thead>
        <tbody>
            {coursedata}
        </tbody>
    </table>

    </div>
    </div>
  )
}

export default Courses