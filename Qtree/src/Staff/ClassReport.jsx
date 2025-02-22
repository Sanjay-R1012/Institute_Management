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
            const[filteredbatch,setFilteredbatch]=useState([])
            const [attendance, setAttendance] = useState({});
        
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
            },[])

            

            useEffect(() =>{
                const filtered_batch = batchlist.filter(
                    (batch) => batch._id === class_data.id.batch
                  )
                  console.log("bjbwbdckaeb",filteredbatch)
                  setFilteredbatch(filtered_batch)
            },[batchlist])



              const studentdata = filteredbatch.map(batch => {
                const selectedStudentIds = batch.selectedstudents;
                

                const selectedStudents = studentlist.filter(student => 
                selectedStudentIds.includes(student._id))
                console.log("students",selectedStudents)

                return(selectedStudents.map(student => (
                                <tr key={student._id}>
                                    <td>{student.studentname}</td>
                                    <td>{student.email}</td>
                                    <td>{student.classtype}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={attendance[student._id] || false}
                                            onChange={() => handleAttendanceChange(student._id)}/>
                                    </td>
                                </tr>
                            ))     
                )
              })

              const handleAttendanceChange = (studentId) => {
                setAttendance(prevAttendance => ({
                    ...prevAttendance,
                    [studentId]: !prevAttendance[studentId]
                }));
            };

            console.log(class_data.id.batch,"batch id")
            console.log(attendance,"attendance")

            const createreport = () => {
                const new_report ={
                    "date":class_data.date,
                    "attendance":attendance,
                    "todayactivity":todayactivity,
                    "staff": id,
                    "batch" : class_data.id.batch
                }
                axios.post("http://127.0.0.1:3000/report/add/", new_report)
                .then((response) => console.log(response.data))
                .catch((error) => console.log(error));

                navigate('/staff/timetable/')
            }


  return (
    <div className='box'>
    <form className='addform'>

            <div>
                <h1>Student Attendance</h1>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Class Type</th>
                        <th>Present</th>
                    </tr>
                </thead>
                <tbody>
                    {studentdata}
                </tbody>
                </table>
            </div>

        <div className="formgroup">
        <textarea id='todayactivity' className='form-input para-input' value={todayactivity} onChange={event =>(setTodayactivity(event.target.value))} required/>
        <label htmlFor="todayactivity" className='form-label'>Today activity</label>
        </div>

        <div className="bottom-box">
            <button className='form-button' type='button' onClick={createreport}>Update</button>
            <button className='form-button' onClick={() => navigate('/staff/timetable/')}>cancel</button>
        </div>
    </form>
</div>
  )
}

export default ClassReport