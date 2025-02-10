import React from 'react'
import Navbar from '../Navbar'
import StudentsList from './StudentsList'
import StaffsList from './StaffsList'
import Courses from './Courses'
import AccessRequsts from './AccessRequsts'
import Students from '../Staff.jsx/Students'

const DashBoard = () => {
  return (
    <div>
        <Navbar/>
        {/* <StudentsList/> */}
        {/* <StaffsList /> */}
        {/* <Courses /> */}
        {/* <AccessRequsts /> */}
        <Students />
    </div>
  )
}

export default DashBoard