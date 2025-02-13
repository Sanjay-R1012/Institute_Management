import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const admin =<div>
              <ul>
            <NavLink className={'nav-link'} to={'/admin/students/'}>Students</NavLink>
            <NavLink className={'nav-link'} to={'/admin/staffs/'}>Staffs</NavLink>
            <NavLink className={'nav-link'} to={'/admin/courses/'}>Courses</NavLink>
            <NavLink className={'nav-link'} to={'/admin/batch/'}>Batch</NavLink>
            <NavLink className={'nav-link'} to={'/admin/request/'}>Waiting</NavLink>
            <NavLink className={'nav-link'} to={'/staff/classes/'}>Class</NavLink>
            <NavLink className={'nav-link'} to={'/student/data/'}>Sdata</NavLink>
          </ul>
  </div>
  return (
    <div className='side-nav'>
        <img className='logo' src="https://www.qtreetechnologies.in/assets/frontend/img/logo-dark.png" alt="Qtree logo" />
        <div className="navbar">
          {admin}
        </div> 
        <button className='logout'>Log out</button>
    </div>
  )
}

export default Navbar