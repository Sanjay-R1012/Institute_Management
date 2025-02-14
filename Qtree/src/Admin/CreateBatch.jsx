import React from 'react'
import  { useEffect, useState } from 'react'
import '../index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBatch = () => {
  const navigate =useNavigate()

      const [batchno,setBatchno]=useState('')
      const [coursename,setCourseName]=useState('')
      const [startingdate,setStartingdate]=useState('')
      const [classtype,setClasstype]=useState('')
      const [staff,SetStaff]=useState('')
      const[courselist,SetCourselist]=useState([])
      const[stafflist,SetStafflist]=useState([])
      const[studentlist,setStudentlist]=useState([])

      const [selectedStudents, setSelectedStudents] = useState([])
      const [selectedTimeRange, setSelectedTimeRange] = useState("")

  
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
      },[])

      const courseoption = courselist.map(course =><option key={course._id} value={course._id}>{course.course_name}</option>)

      const filteredstaff = stafflist.filter((staff) => staff.handlingcourse === coursename)
      const staffoption = filteredstaff.map(staff =>{
        console.log(staff)
        return(
      <option key={staff._id} value={staff._id}>{staff.staffname}</option>)
    })

    const filteredstudent =studentlist.filter(student => student.coursename === coursename)


    const submit =() => {
        const new_batch = {
          "batchno":batchno,
          "coursename":coursename,
          "classtype":classtype,
          "startingdate":startingdate,
          "staff":staff,
          "selectedtimerange":selectedTimeRange,
          "selectedstudents":selectedStudents
        }

        axios.post('http://127.0.0.1:3000/batch/add/',new_batch)
        .then(response => console.log(response.data))
        .catch((error) => console.log(error))

        navigate('/admin/batch/')
    }

    const clear = () => {
        setBatchno('')
        setCourseName('')
        setClasstype('')
        setStartingdate('')
        SetStaff('')
      };
      
        // Function to generate time ranges from 6 AM to 6 PM with 1-hour intervals
        const generateTimeRanges = () => {
          const timeRanges = [];
          for (let hour = 6; hour <= 18; hour++) {
            const startTime = new Date(0, 0, 0, hour).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });
            const endTime = new Date(0, 0, 0, hour + 1).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });
            timeRanges.push(`${startTime} - ${endTime}`);
          }
          return timeRanges
        }
      
        // Time ranges array
        const timeRanges = generateTimeRanges()
      
        // Function to handle time range selection
        const handleTimeRangeChange = (event) => {
          setSelectedTimeRange(event.target.value);
        };

      const handleCheckboxChange = (event, studentId) => {
        const { checked } = event.target;

        if (checked) {
          setSelectedStudents([...selectedStudents, studentId]);
        } else {
          setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
        }
      };

      const studentoption =filteredstudent.map((student) => (
        <div key={student._id} className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" value={student._id} onChange={(e) => handleCheckboxChange(e, student._id)}
              checked={selectedStudents.includes(student._id)}/>
            {student.studentname}
          </label>
        </div>
      ))

      const timeoptions = timeRanges.map((timeRange, index) => (
          <option key={index} value={timeRange}>
            {timeRange}
          </option>
        ))


  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' value={batchno} onChange={event =>setBatchno(event.target.value)} required/>
            <label htmlFor="name" className='form-label'>Batch No</label>
            </div>

            <div className="formgroup">
            <label htmlFor="course" className='form-label-check'>Course Name</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setCourseName(event.target.value)}>
            <option value="0" >select</option>
              {courseoption}
            </select>
            </div>
            
            <div className="formgroup">
            <label htmlFor="staff" className='form-label-check'>Staff</label>
            <select className="form-select" aria-label="Default select example"   onChange={event => SetStaff(event.target.value)}>
            <option value="0" >select</option>
              {staffoption}
            </select>
            </div>

            <div className="formgroup">
            <label htmlFor="enroll-date" className='form-label-check'>Starting Date</label>
            <input  type="date" id='enroll-date' className='form-input' value={startingdate} onChange={event => setStartingdate(event.target.value)} required/>
            </div>

            <div className="formgroup">
            <label htmlFor="classtime" className='form-label-check'>Class Time</label>
            <select className="form-select" id="time-range-select" value={selectedTimeRange} onChange={handleTimeRangeChange}>
            <option value="">-- Select a time range --</option>
            {timeoptions}
            </select>
           </div>

            <div className="formgroup">
            <label htmlFor="type" className='form-label-check'>online or offline</label>
            <select className="form-select" aria-label="Default select example" onChange={event => setClasstype(event.target.value)}>
            <option value="0" >select</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
            </div>


            <div className="formgroup">
            <label htmlFor="plang" className='form-label-check'>Students</label>
                {studentoption}
            </div>

            <div className="bottom-box">
                <button onClick={submit} value="Submit" className='form-button'>Add</button>
                <button onClick={clear} className='form-button'>clear</button>
            </div>
        </form>
    </div>
  )
}

export default CreateBatch