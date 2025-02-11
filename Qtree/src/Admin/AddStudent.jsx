import React, { useState } from 'react'
import '../index.css'

const AddStudent = () => {
  const [studentname,setStudentName]=useState('')
  const [coursename,setCourseName]=useState('')
  const [enrolldate,setEnrolldate]=useState('')
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  const [classtype,setClasstype]=useState('')
  const [batchno,setBatchno]=useState('')
  const [staff,SetStaff]=useState('')
  const [classtime,setClasstime]=useState('')

  const submit =() => {
    console.log({studentname,
    coursename,
    enrolldate,
    email,
    password,
    classtype,
    batchno,
    staff,
    classtime})
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
    setClasstime('')
  }



  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' value={studentname} onChange={event =>(setStudentName(event.target.value))} required/>
            <label htmlFor="name" className='form-label'>Name</label>
            </div>

            <div className="formgroup">
            <input type="text" id='course' className='form-input' value={coursename} onChange={event =>(setCourseName(event.target.value))} required/>
            <label htmlFor="course" className='form-label'>Course Name</label>
            </div>
            
            <div className="formgroup">
            <input  type="date" id='enroll-date' className='form-input' value={enrolldate} onChange={event =>(setEnrolldate(event.target.value))} required/>
            <label htmlFor="enroll-date" className='form-label'>Date of Enroll</label>
            </div>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' value={email} onChange={event =>(setEmail(event.target.value))} required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="text" id='password' className='form-input' value={password} onChange={event =>(setpassword(event.target.value))} required/>
            <label htmlFor="password" className='form-label'>Password</label>
            </div>

            <div className="formgroup">
            <input type="text" id='type' className='form-input' value={classtype} onChange={event =>(setClasstype(event.target.value))} required/>
            <label htmlFor="type" className='form-label'>online or offline</label>
            </div>

            <div className="formgroup">
            <input type="text" id='batchno' className='form-input' value={batchno} onChange={event =>(setBatchno(event.target.value))} required/>
            <label htmlFor="batchno" className='form-label'>Batch No</label>
            </div>

            <div className="formgroup">
            <input type="text" id='staff' className='form-input' value={staff} onChange={event =>(SetStaff(event.target.value))} required/>
            <label htmlFor="staff" className='form-label'>Assign staff</label>
            </div>

            <div className="formgroup">
            <input type="text" id='time' className='form-input' value={classtime} onChange={event =>(setClasstime(event.target.value))} required/>
            <label htmlFor="time" className='form-label'>Assign Time Slot</label>
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