import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const ClassReport = () => {
    const navigate = useNavigate()
            
            const params = useParams()
            
            const {id} = params
            
            const location = useLocation()
            
            const class_data = location.state
            
            console.log(class_data)

            const [todayactivity,setTodayactivity]=useState("")
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

            const filteredbatch = batchlist.filter(
                (batch) => batch._id === class_data.id.batch
              )
              console.log("bjbwbdckaeb",filteredbatch)

              const studentdata = filteredbatch.map(batch => {
                const selectedStudentIds = batch.selectedstudents;

                const selectedStudents = studentlist.filter(student => 
                selectedStudentIds.includes(student._id))
                console.log("students",selectedStudents)
              })

  return (
    <div className='box'>
    <form className='addform'>

    <div className="formgroup ">
        {studentdata}
        </div>

        <div className="formgroup">
        <textarea id='todayactivity' className='form-input para-input' value={todayactivity} onChange={event =>(setTodayactivity(event.target.value))} required/>
        <label htmlFor="todayactivity" className='form-label'>Today activity</label>
        </div>

        <div className="bottom-box">
            <button className='form-button'  >Update</button>
            <button className='form-button' onClick={() => navigate("/admin/courses/")}>cancel</button>
        </div>
    </form>
</div>
  )
}

export default ClassReport