import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar'

const TimeTable = () => {
    const navigate =useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])
    const[batchlist,setBatchlist]=useState([])

    useEffect(() =>{
        axios.get('http://127.0.0.1:3000/course/data/')
            .then(response =>{ SetCourselist(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/staff/data/')
        .then(response => { 
            SetStafflist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/student/data/')
        .then(response => { 
            setStudentlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/batch/data/')
        .then(response => { 
            setBatchlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))
    },[])

    const getNextClassDate = (startDate) => {
        let currentDate = new Date(startDate);
        while (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
          currentDate.setDate(currentDate.getDate() + 1);
        }
        return currentDate;
      };
    
      // Function to generate daily class for a staff member
      const generateDailyClass = (staff) => {
        const batch = batchlist.find((b) => b.coursename === staff.handlingcourse);
        const course = courselist.find((c) => c._id === staff.handlingcourse);
    
        if (batch && course) {
          const classDate = getNextClassDate(staff.joiningdate);
          return {
            date: classDate.toISOString().split("T")[0],
            day: classDate.toLocaleDateString("en-IN", { weekday: "long" }),
            batch_no: batch.batchno,
            course_name: course.course_name,
            class_type: batch.classtype,
            time_range: batch.selectedtimerange,
            staff_name: staff.staffname,
            id:{staff:staff._id,
             batch:batch._id
            }
        }
        }
        return null;
      };


  return (
    <div>
        <Navbar />
        <div className='students-list'>
        <div>
      <h1>Daily Class Timetable</h1>
      {stafflist.map((staff) => {
        const dailyClass = generateDailyClass(staff);
        return (
          <div key={staff._id} className='student-list'>
            <h2>Timetable for {staff.staffname}</h2>
            {dailyClass ? (
              <table border="1" cellPadding="10" cellSpacing="0" className='student-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Batch No</th>
                    <th>Course Name</th>
                    <th>Class Type</th>
                    <th>Time Range</th>
                    <th>Daily Report</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{dailyClass.date}</td>
                    <td>{dailyClass.day}</td>
                    <td>{dailyClass.batch_no}</td>
                    <td>{dailyClass.course_name}</td>
                    <td>{dailyClass.class_type}</td>
                    <td>{dailyClass.time_range}</td>
                    <td>
                    <button onClick={() => navigate(`/admin/staff/report/${staff._id}/`, { state: dailyClass})}>Report</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>No class scheduled.</p>
            )}
          </div>
        );
      })}
    </div>
    </div>
    </div>
  )
}

export default TimeTable