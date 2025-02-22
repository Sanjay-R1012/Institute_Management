import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

  const {role}=props


  const admin =<div>
              <ul>
            <NavLink className={'nav-link'} to={'/admin/students/'}>Students</NavLink>
            <NavLink className={'nav-link'} to={'/admin/staffs/'}>Staffs</NavLink>
            <NavLink className={'nav-link'} to={'/admin/courses/'}>Courses</NavLink>
            <NavLink className={'nav-link'} to={'/admin/batch/'}>Batch</NavLink>
            <NavLink className={'nav-link'} to={'/admin/request/'}>Waiting</NavLink>
          </ul>
  </div>

  const staff =<div>
    <ul>
            <NavLink className={'nav-link'} to={'/staff/classes/'}>Staff_Batches</NavLink>
            <NavLink className={'nav-link'} to={'/staff/timetable/'}>Staff_Timetable</NavLink>
            <NavLink className={'nav-link'} to={'/student/data/'}>Student_data</NavLink>
          </ul>
  </div>

    const nav = () => {if(role == "staff"){
      return admin
    }
    else{
      return staff
    }
    }

  return (
    <div className='side-nav'>
        <img className='logo' src="https://www.qtreetechnologies.in/assets/frontend/img/logo-dark.png" alt="Qtree logo" />
        <div className="navbar">
          {nav}
        </div> 
        <button className='logout'>Log out</button>
    </div>
  )
}

export default Navbar