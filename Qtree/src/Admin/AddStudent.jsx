import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const navigate =useNavigate()


  const [studentname,setStudentName]=useState('')
  const [coursename,setCourseName]=useState('')
  const [enrolldate,setEnrolldate]=useState('')
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [classtype,setClasstype]=useState('')
  const [batchno,setBatchno]=useState('')
  const [staff,SetStaff]=useState('')
  const [staffslist,SetStafflist]=useState([])
  const [courselist,SetCourselist]=useState([])

  useEffect(() =>{
    axios.get('http://127.0.0.1:3000/course/data/')
      .then(response => { 
        SetCourselist(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))

    axios.get('http://127.0.0.1:3000/staff/data/')
      .then(response => { 
        SetStafflist(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
  },[])

  const submit =() => {
    const new_student ={
    "studentname":studentname,
    "coursename":coursename,
    "enrolldate":enrolldate,
    "email":email,
    "password":password,
    "classtype":classtype,
    "batchno":batchno,
    "staff":staff}

    axios.post('http://127.0.0.1:3000/student/add/',new_student)
        .then(response => console.log(response.data))
        .catch((error) => console.log(error))

        navigate('/admin/students/')
  }

  const clear =() =>{
    setStudentName('')
    setCourseName('')
    setEnrolldate('')
    setEmail('')
    setpassword('')
    setClasstype('')
    SetStaff('')
    setBatchno('')
  }

  const courseoption = courselist.map(course =><option key={course._id} value={course._id}>{course.course_name}</option>)
  const filteredstaff = staffslist.filter(
    (staff) => staff.handlingcourse === coursename
  );
  const staffoption = filteredstaff.map(staff =>{
    console.log(staff)
    return(
  <option key={staff._id} value={staff._id}>{staff.staffname}</option>)
})

  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' value={studentname} onChange={event =>(setStudentName(event.target.value))} required/>
            <label htmlFor="name" className='form-label'>Student Name</label>
            </div>

            <div className="formgroup">
            <label htmlFor="course" className='form-label-check'>Course Name</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setCourseName(event.target.value)}>
            <option value="0" selected>select</option>
              {courseoption}
            </select>
            </div>
            
            <div className="formgroup">
            <label htmlFor="enroll-date" className='form-label-check'>Date of Enroll</label>
            <input  type="date" id='enroll-date' className='form-input' value={enrolldate} onChange={event => setEnrolldate(event.target.value)} required/>
            </div>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' value={email} onChange={event => setEmail(event.target.value)} required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="text" id='password' className='form-input' value={password} onChange={event => setpassword(event.target.value)} required/>
            <label htmlFor="password" className='form-label'>Password</label>
            </div>

            <div className="formgroup">
            <label htmlFor="type" className='form-label-check'>online or offline</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setClasstype(event.target.value)}>
            <option value="0" selected>select</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            </div>

            <div className="formgroup">
            <input type="text" id='batchno' className='form-input' value={batchno} onChange={event => setBatchno(event.target.value)} required/>
            <label htmlFor="batchno" className='form-label'>Batch No</label>
            </div>

            <div className="formgroup">
            <label htmlFor="staff" className='form-label-check'>Staff</label>
            <select className="form-select" aria-label="Default select example"  onChange={event => SetStaff(event.target.value)}>
            <option value="0" selected>select</option>
              {staffoption}
            </select>
            </div>

            <div className="bottom-box">
                <button onClick={submit} value="Submit" className='form-button'>Add</button>
                <button onClick={clear} className='form-button'>clear</button>
            </div>
        </form>
    </div>
  )
}

export default AddStudent