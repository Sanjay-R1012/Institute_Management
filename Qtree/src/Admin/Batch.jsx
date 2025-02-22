import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Batch = () => {
    const navigate =useNavigate()

    const[courselist,SetCourselist]=useState([])
    const[stafflist,SetStafflist]=useState([])
    const[studentlist,setStudentlist]=useState([])
    const[batchlist,setbatchlist]=useState([])
    const[filteredbatch,setFilteredbatch]=useState([])
    const[reportlist,setReportlist]=useState([])

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
            setbatchlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))

        axios.get('http://127.0.0.1:3000/report/data/',{headers})
        .then(response => { 
            setReportlist(response.data)
             console.log(response.data)
        })
        .catch(error => console.log(error))
    },[])

    useEffect(() => {setFilteredbatch(batchlist.filter((batch) => batch.finished === false))},[batchlist])

    const finishedbatch =() => {
      setFilteredbatch(batchlist.filter((batch) => batch.finished === true))
    }

    const unfinishedbatch = () =>{ setFilteredbatch(batchlist.filter((batch) => batch.finished === false))}

    const batchdata = filteredbatch.map(batch => {
      

      const Staffs = stafflist.filter(
          (staff) => staff._id === batch.staff
        )

      const report = reportlist.filter(
          (report) => batch._id === report.batch 
        )
      
      const Course = courselist.filter(
        (course) => batch.coursename === course._id
      )
      console.log(batchlist)

      const finished =(id) => {
        const finished_batch={
          'finished':true}
      
          axios.patch(`http://127.0.0.1:3000/batch/update/${id}/`, finished_batch)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      }

      return(
          <tr key={batch._id}>
              <td>{batch.batchno}</td>
              <td>{Course[0].course_name}</td>
              <td>{Staffs[0].staffname}</td>
              <td>{batch.selectedstudents.length}</td>
              <td>{batch.startingdate}</td>
              <td>{batch.selectedtimerange}</td>
              <td>{batch.classtype}</td>
              <td>{report.length}</td>
              <td><button className='table-button'>view</button></td>
              <td><button className="btn btn-danger" type="submit" onClick={() =>finished(batch._id)}>finished</button></td>
          </tr>
      )
  })


  return (
    <div>
      <Navbar />
      <div className="students-list">
        <button className="btn btn-primary" onClick={() => navigate("/admin/batch/create/")}>Create Batch</button>
        <button className="btn btn-primary" onClick={finishedbatch}>finished Batch</button>
        <button className="btn btn-primary" onClick={unfinishedbatch}>unfinished Batch</button>
        <table className="student-table">
          <thead>
            <tr>
              <th>BatchNo</th>
              <th>Course</th>
              <th>Staff</th>
              <th>Enrolled Students</th>
              <th>Starting Date</th>
              <th>Class timing</th>
              <th>Class type</th>
              <th>Classes Finished</th>
              <th>more Data</th>
              <th>batch finished</th>
            </tr>
          </thead>
          <tbody>
            {batchdata}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Batch;
