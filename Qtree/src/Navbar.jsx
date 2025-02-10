import React from 'react'
import './index.css'

const Navbar = () => {
  return (
    <div className='side-nav'>
        <img className='logo' src="https://www.qtreetechnologies.in/assets/frontend/img/logo-dark.png" alt="Qtree logo" />
        <div className="navbar">
          <ul>
            <li className='nav-item'><a href="">Home</a></li>
            <li className='nav-item'><a href="">Students</a></li>
            <li className='nav-item'><a href="">Staffs</a></li>
            <li className='nav-item'><a href="">Courses</a></li>
            <li className='nav-item'><a href="">Waiting</a></li>
          </ul>
        </div> 
        <button className='logout'>Log out</button>
    </div>
  )
}

export default Navbar