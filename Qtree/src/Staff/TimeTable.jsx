import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../Navbar'

const TimeTable = () => {
  const navigate = useNavigate()

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

    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
      };
    
      // Check if today is a weekend
      const isWeekend = () => {
        const today = new Date();
        return today.getDay() === 0 || today.getDay() === 6; // Sunday = 0, Saturday = 6
      };
    
      // Function to generate today's timetable for a staff member
      const generateTodaysTimetable = (staff) => {
        if (isWeekend()) {
          return null; // No classes on weekends
        }
    
        const batch = batchlist.find((b) => b.coursename === staff.handlingcourse);
        const course = courselist.find((c) => c._id === staff.handlingcourse);
    
        if (batch && course) {
          return {
            date: getCurrentDate(),
            day: new Date().toLocaleDateString("en-IN", { weekday: "long" }),
            batch_no: batch.batchno,
            course_name: course.course_name,
            class_type: batch.classtype,
            time_range: batch.selectedtimerange,
            staff_name: staff.staffname,
            id:{staff:staff._id,
              batch:batch._id
             }
          };
        }
        return null;
      };


  return (
    <div>
        <Navbar />
        <div className='students-list'>
        <div>
      <h1>Today's Class Timetable</h1>
      {stafflist.map((staff) => {
        if (isWeekend()) {
          return (
            <div key={staff._id}>
              <h2>Timetable for {staff.staffname}</h2>
              <p>No classes on weekends.</p>
            </div>
          );
        }

        const todaysClass = generateTodaysTimetable(staff);
        return (
          <div key={staff._id} >
            <h2>Timetable for {staff.staffname}</h2>
            {todaysClass ? (
              <table border="1" cellPadding="10" cellSpacing="0" className='student-table'>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Batch No</th>
                    <th>Course Name</th>
                    <th>Class Type</th>
                    <th>Time Range</th>
                    <th>Dailly Report</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{todaysClass.date}</td>
                    <td>{todaysClass.day}</td>
                    <td>{todaysClass.batch_no}</td>
                    <td>{todaysClass.course_name}</td>
                    <td>{todaysClass.class_type}</td>
                    <td>{todaysClass.time_range}</td>
                    <td>
                    <button onClick={() => navigate(`/admin/staff/report/${staff._id}/`, { state: todaysClass})}>Report</button>
                    </td>
                  </tr>
                </tbody>
              </table >
            ) : (
              <p>No class scheduled for today.</p>
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