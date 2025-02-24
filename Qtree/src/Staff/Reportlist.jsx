import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Reportlist = () => {

     const navigate = useNavigate()
                
    const params = useParams()
                
    const {id} = params
                
    const location = useLocation()
                
    const report_data = location.state
                
    console.log(report_data)
            
    const batchdata = report_data.batch

    const reportdata = report_data.reportdata

    const studentdata = report_data.students
    console.log(studentdata,"studentdata")

    const back =() => {
        if(report_data.role === "staff"){
            navigate('/staff/classes/')
        }
        else{
            navigate('/admin/batch/')
        }
    }

    const dailyreport =reportdata.map((report,index) => {
        const studentname = studentdata.map((student,index) => {
            return <tr key={index}>
                <td>{report.date}</td>
                <td>{report.todayactivity}</td>
                <td>{student.studentname}</td>
                <td>{report.attendance[student._id] ? "Present" : "Absent"}</td>
            </tr>
    })
        console.log(studentname,"studentname")
       return <table key={index} className="student-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>DailyTask</th>
                    <th>Students </th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {studentname}
            </tbody>
        </table>
        
    })

  return (
    <div >
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button" onClick={back}>back</button>
        </div>
        {dailyreport}
    </div>
  )
}

export default Reportlist