import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditStudent = () => {
    const navigate = useNavigate()

    const params = useParams()

    const {id} = params

    const location = useLocation()

    const student_data = location.state

    console.log(student_data)

    const [studentname, setStudentName] = useState(student_data.studentname);
  const [coursename, setCourseName] = useState(student_data.coursename);
  const [enrolldate, setEnrolldate] = useState(student_data.enrolldate);
  const [email, setEmail] = useState(student_data.email);
  const [password, setpassword] = useState(student_data.password);
  const [classtype, setClasstype] = useState(student_data.classtype);
  const [staff, SetStaff] = useState(student_data.staff);
  const [staffslist, SetStafflist] = useState([]);
  const [courselist, SetCourselist] = useState([]);

  useEffect(() => {
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
  }, []);

  const update = () => {
    const update_student = {
      studentname: studentname,
      coursename: coursename,
      enrolldate: enrolldate,
      email: email,
      password: password,
      classtype: classtype,
      staff: staff,
    };

    const new_user = {
      email:email,
      password:password,
      role:"student"
    }

    axios
      .patch(`http://127.0.0.1:3000/student/update/${id}/`, update_student)
      .then((response) => navigate('/admin/students/'))
      .catch((error) => console.log(error));

    axios
      .patch(`http://127.0.0.1:3000/auth/user/update/`, new_user)
      .then((response) => navigate('/admin/students/'))
      .catch((error) => console.log(error));

    navigate("/admin/students/");
  };


  const courseoption = courselist.map((course) => (
    <option key={course._id} value={course._id}>
      {course.course_name}
    </option>
  ));

  const filteredstaff = staffslist.filter(
    (staff) => staff.handlingcourse === coursename);
  const staffoption = filteredstaff.map((staff) => {
    return (
      <option key={staff._id} value={staff._id}>
        {staff.staffname}
      </option>
    );
  });


  return (
    <div className="box">
      <form className="addform">
        <div className="formgroup">
          <input
            type="text"
            id="name"
            className="form-input"
            value={studentname}
            onChange={(event) => setStudentName(event.target.value)}
            required
          />
          <label htmlFor="name" className="form-label">
            Student Name
          </label>
        </div>

        <div className="formgroup">
          <label htmlFor="course" className="form-label-check">
            Course Name
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setCourseName(event.target.value)}>
            {courseoption}
          </select>
        </div>

        <div className="formgroup">
          <label htmlFor="enroll-date" className="form-label-check">
            Date of Enroll
          </label>
          <input
            type="date"
            id="enroll-date"
            className="form-input"
            value={enrolldate}
            onChange={(event) => setEnrolldate(event.target.value)}
            required
          />
        </div>

        <div className="formgroup">
          <input
            type="text"
            id="email"
            className="form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>

        <div className="formgroup">
          <input
            type="text"
            id="password"
            className="form-input"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>

        <div className="formgroup">
          <label htmlFor="type" className="form-label-check">
            online or offline
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setClasstype(event.target.value)}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>


        <div className="formgroup">
          <label htmlFor="staff" className="form-label-check">Staff</label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => SetStaff(event.target.value)}>
            {staffoption}
          </select>
        </div>

        <div className="bottom-box">
          <button onClick={update} value="Submit" className="form-button">
            Update
          </button>
          <button onClick={() => navigate('/admin/students/')} className="form-button">
            cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditStudent