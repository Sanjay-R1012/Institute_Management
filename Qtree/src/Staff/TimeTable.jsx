import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Staffnavbar from '../Staffnavbar'

const TimeTable = () => {
  const navigate = useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])
    const[batchlist,setBatchlist]=useState([])
    const[report,setReport]=useState([])

    useEffect(() =>{
      const headers ={
        'Content-Type':'Application/Json',
        'Authorization':localStorage.getItem('Bearer')
    }

        axios.get('http://127.0.0.1:3000/course/data/',{headers})
            .then(response =>{ SetCourselist(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/staff/data/',{headers})
        .then(response => { 
            SetStafflist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/student/data/',{headers})
        .then(response => { 
            setStudentlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/batch/data/',{headers})
        .then(response => { 
            setBatchlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/report/data/',{headers})
        .then(response => { 
            setReport(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))
    },[])


    const getCurrentDate = () => {
        const today = new Date();
        return today.toISOString().split("T")[0];
      };
    
      const isWeekend = () => {
        const today = new Date();
        return today.getDay() === 0 || today.getDay() === 6; 
      };
    

      const generateTodaysTimetable = (staff) => {
        if (isWeekend()) {
          return null;
        }

        const filtered_report =report.filter((rep) => rep.date === getCurrentDate())
        console.log(filtered_report ,"Daily report")

        const unfinishedbatch = batchlist.filter((batch) => batch.finished === false);
        console.log(unfinishedbatch,"unfinished batches")

        
        const batch = unfinishedbatch.filter((b) => b.coursename === staff.handlingcourse);
        console.log(batch)
        
        const batch2 =filtered_report.filter((repo) =>( batch._id === repo.batch))
        console.log(batch2,"batch not submitting record")
        

      return batch.map((batch) => {

      const batch2 =filtered_report.filter((repo) =>( batch._id === repo.batch))
      console.log(batch2,"batch not submitting record")

      const course = courselist.find((c) => c._id === batch.coursename);

      if(batch2.length == 0){if (batch && course) {
        return {
          date: getCurrentDate(),
          day: new Date().toLocaleDateString("en-IN", { weekday: "long" }),
          batch_no: batch.batchno,
          course_name: course.course_name,
          class_type: batch.classtype,
          time_range: batch.selectedtimerange,
          staff_name: staff.staffname,
          id:{staff:staff,
            batch:batch._id
          }
        };
      }}
      return {
        date: getCurrentDate(),
        day: new Date().toLocaleDateString("en-IN", { weekday: "long" }),
        batch_no: batch.batchno,
        course_name: course.course_name,
        class_type: batch.classtype,
        time_range: batch.selectedtimerange,
        staff_name: staff.staffname,
        id:{staff:staff,
          batch:batch._id
        },
        report:"submitted"
      };
    });

      };

      const loginstaff = stafflist.filter((s) => s.email == localStorage.getItem("email"))
      console.log(loginstaff,"login staff")

  return (
    <div>
        <Staffnavbar />
        <div className='students-list'>
      {loginstaff.map((staff) => {
        const todaysClasses = generateTodaysTimetable(staff);
        return (
          <div key={staff._id}>
            <h2>Timetable for {staff.staffname}</h2>
            {isWeekend() ? (
              <p>No classes on weekends.</p>
            ) : todaysClasses && todaysClasses.length > 0  ? (
              todaysClasses.map((todaysClass, index) =>  (
                <table key={index} border="1" cellPadding="10" cellSpacing="0" className='student-table'>
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
                      {todaysClass.report !=="submitted" ? (
                      <td>
                    <button className='table-button' type='submit' onClick={() => navigate(`/admin/staff/report/${staff._id}/`, { state: todaysClass})}>Report</button>
                    </td>):(<td>Report submitted</td>)}
                    </tr>
                  </tbody>
                </table>
              ))
            ) : (
              <p>No class scheduled or classes finished.</p>
            )}
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default TimeTable