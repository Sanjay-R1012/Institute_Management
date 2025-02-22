import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStaff = () => {

  const navigate =useNavigate()

    const [staffname,setStaffName]=useState('')
    const [handlingcourse,setHandlingcourse]=useState('')
    const [courses,setCourses]=useState([])
    const [joiningdate,setJoiningdate]=useState('')
    const [email,setEmail]=useState('')
    const [password,setpassword]=useState('')
    const [classtype,setClasstype]=useState('')

    useEffect(() => {
      const headers ={
        'Content-Type':'Application/Json',
        'Authorization':localStorage.getItem('Bearer')
    }

      axios.get('http://127.0.0.1:3000/course/data/',{headers})
      .then(response => { 
        setCourses(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
    },[])

  
    const submit =() => {
      const new_staff = {
        'staffname' : staffname,
        "handlingcourse" : handlingcourse,
        "joiningdate" : joiningdate,
        "email" : email,
        "classtype" : classtype}

        const new_user = {
          email:email,
          password:password,
          role:"staff"
        }

        axios.post('http://127.0.0.1:3000/staff/add/',new_staff)
        .then(response => console.log(response.data))
        .catch((error) => console.log(error))

        axios
      .post("http://127.0.0.1:3000/auth/create/user/", new_user)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));

        navigate('/admin/Staffs/')
    }
  
    const clear =() =>{
      setStaffName('')
      setHandlingcourse('')
      setJoiningdate('')
      setEmail('')
      setpassword('')
      setClasstype('')
    }

    const courseoption = courses.map(course =><option key={course._id} value={course._id}>{course.course_name}</option>)

  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' value={staffname} onChange={event =>(setStaffName(event.target.value))} required/>
            <label htmlFor="name" className='form-label'>Staff Name</label>
            </div>

            <div className="formgroup">
            <label htmlFor="course" className='form-label-check'>Handling Course Name</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setHandlingcourse(event.target.value)}>
            <option value="0" selected>select</option>
              {courseoption}
            </select>
            </div>
            
            <div className="formgroup">
            <label htmlFor="joining-date" className='form-label-check'>Date of Joining</label>
            <input  type="date" id='joining-date' className='form-input' value={joiningdate} onChange={event =>(setJoiningdate(event.target.value))} required/>
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
            <label htmlFor="type" className='form-label-check'>online or offline</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setClasstype(event.target.value)}>
            <option value="0" selected>select</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
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