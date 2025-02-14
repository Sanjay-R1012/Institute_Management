import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const EditStaff = () => {
        const navigate = useNavigate()
    
        const params = useParams()
    
        const {id} = params
    
        const location = useLocation()
    
        const staff_data = location.state
    
        console.log(staff_data)

    const [staffname,setStaffName]=useState(staff_data.staffname)
    const [handlingcourse,setHandlingcourse]=useState(staff_data.handlingcourse)
    const [courses,setCourses]=useState([])
    const [joiningdate,setJoiningdate]=useState(staff_data.joiningdate)
    const [email,setEmail]=useState(staff_data.email)
    const [password,setpassword]=useState(staff_data.password)
    const [classtype,setClasstype]=useState(staff_data.classtype)

    useEffect(() => {
      axios.get('http://127.0.0.1:3000/course/data/')
      .then(response => { 
        setCourses(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
    },[])

  
    const update =() => {
      const update_staff = {
        'staffname' : staffname,
        "handlingcourse" : handlingcourse,
        "joiningdate" : joiningdate,
        "email" : email,
        "password" : password,
        "classtype" : classtype}

        axios.patch(`http://127.0.0.1:3000/staff/update/${id}/`, update_staff)
      .then((response) => navigate('/admin/staffs/'))
      .catch((error) => console.log(error));


        navigate('/admin/Staffs/')
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
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            </div>


            <div className="bottom-box">
                <button className='form-button' type='submit' onClick={update}>update</button>
                <button className='form-button' onClick={() => navigate('/admin/staffs/')}>cancel</button>
            </div>
        </form>
    </div>
  )
}

export default EditStaff