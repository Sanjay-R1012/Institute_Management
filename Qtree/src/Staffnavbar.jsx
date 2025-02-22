import React from 'react'
import './index.css'
import { NavLink, useNavigate } from 'react-router-dom'

const Staffnavbar = () => {
    const navigate =useNavigate()


  return (
    <div className='side-nav'>
            <img className='logo' src="https://www.qtreetechnologies.in/assets/frontend/img/logo-dark.png" alt="Qtree logo" />
                <ul>
                <NavLink className={'nav-link'} to={'/staff/classes/'}>Batches</NavLink>
                <NavLink className={'nav-link'} to={'/staff/timetable/'}>Timetable</NavLink>
                </ul>
            <button className='logout' onClick={() => {localStorage.clear(),navigate("/") }}>Log out</button>
        </div>
  )
}

export default Staffnavbar