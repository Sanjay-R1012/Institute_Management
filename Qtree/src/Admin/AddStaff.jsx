import React from 'react'
import { useState } from 'react'

const AddStaff = () => {

   const [staffname,setStaffName]=useState('')
    const [coursename,setCourseName]=useState('')
    const [joiningdate,setJoiningdate]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [classtype,setClasstype]=useState('')
    const [classroomno,setClassroomno]=useState('')
  
    const submit =() => {
      console.log({
      staffname,
      coursename,
      joiningdate,
      email,
      password,
      classtype,
      classroomno})
    }
  
    const clear =() =>{
      setStaffName('')
      setCourseName('')
      setJoiningdate('')
      setEmail('')
      setpassword('')
      setClasstype('')
      setClassroomno('')
    }


  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' value={staffname} onChange={event =>(setStaffName(event.target.value))} required/>
            <label htmlFor="name" className='form-label'>Staff Name</label>
            </div>

            <div className="formgroup">
            <input type="text" id='course' className='form-input' value={coursename} onChange={event =>(setCourseName(event.target.value))} required/>
            <label htmlFor="course" className='form-label'>Handling Course Name</label>
            </div>
            
            <div className="formgroup">
            <input  type="date" id='joining-date' className='form-input' value={joiningdate} onChange={event =>(setJoiningdate(event.target.value))} required/>
            <label htmlFor="joining-date" className='form-label'>Date of Joining</label>
            </div>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' value={email} onChange={event =>(setEmail(event.target.value))} required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="password" id='password' className='form-input' value={password} onChange={event =>(setpassword(event.target.value))} required/>
            <label htmlFor="password" className='form-label'>Password</label>
            </div>

            <div className="formgroup">
            <input type="text" id='type' className='form-input' value={classtype} onChange={event =>(setClasstype(event.target.value))} required/>
            <label htmlFor="type" className='form-label'>online or offline</label>
            </div>

            <div className="formgroup">
            <input type="text" id='classno' className='form-input' value={classroomno} onChange={event =>(setClassroomno(event.target.value))} required/>
            <label htmlFor="classno" className='form-label'>Assign classroom</label>
            </div>

            <div className="bottom-box">
                <button className='form-button' type='submit' onClick={submit}>Add</button>
                <button className='form-button' onClick={clear}>clear</button>
            </div>
        </form>
    </div>
  )
}

export default AddStaff