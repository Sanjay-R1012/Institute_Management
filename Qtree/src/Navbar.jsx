import React from 'react'
import './index.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate =useNavigate()

  return (
    <div className='side-nav'>
        <img className='logo' src="https://www.qtreetechnologies.in/assets/frontend/img/logo-dark.png" alt="Qtree logo" />
              <ul>
            <NavLink className={'nav-link'} to={'/admin/students/'}>Students</NavLink>
            <NavLink className={'nav-link'} to={'/admin/staffs/'}>Staffs</NavLink>
            <NavLink className={'nav-link'} to={'/admin/courses/'}>Courses</NavLink>
            <NavLink className={'nav-link'} to={'/admin/batch/'}>Batch</NavLink>
          </ul>
        <button className='logout' onClick={() => {localStorage.clear()
          navigate("/") }}>Log out</button>
    </div>
  )
}

export default Navbar