import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddCourse = () => {
  const [coursename,setCourseName]=useState('')
  const [duration,setDuration]=useState('')
  const [tools,setTools]=useState([])
  const [proglang,setProglang]=useState([])
  const [syllabus,setSyllabus]=useState('')

  const createcourse =() => {
    const new_course={
    'course_name':coursename,
    'duration':duration,
    'tools':tools,
    'prog_lang':proglang,
    'syllabus':syllabus}

    axios.post('http://127.0.0.1:3000/course/add/', new_course)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  }

  const clear =() =>{
    setCourseName('')
    setDuration('')
    setTools('')
    setProglang('')
    setSyllabus('')
  }


  const toolslist = ["Visual Studio Code",
    "Sublime Text ",
    "UltraEdit",
    "JetBrains IDEs",
    "Eclipse IDE",
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "GitHub Copilot",
    "Codeium",
    "Jira",
    "Axure",
    "Jenkins",
    "Docker",
    "Kubernetes",
    "Node.js",
    "Bootstrap",
    "Firebase",
    "Linx",
    "SendBird",
    "MySQL Workbench",
    "Postman",
    "Dynatrace",
    "AWS",
    "Azure",
    "Bonus tool: Spacelift"]

    const programmingLanguages = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "Go",
      "TypeScript",
      "Swift",
      "Kotlin",
      "Rust",
      "PHP",
      "R",
      "Scala",
      "Perl",
      "Dart",
      "Elixir",
      "Haskell",
      "Lua",
      "Objective-C",
      "Shell",
      "SQL",
      "HTML/CSS",
    ]

    const handletoolCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        setTools([...tools, value]);
      } else {
        setTools(tools.filter((item) => item !== value));
      }
    }

    const handleproglangCheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      if (checked) {
        setProglang([...proglang, value]);
      } else {
        setProglang(proglang.filter((item) => item !== value));
      }
    }

    const tooloptions =toolslist.map((item, index) => (
      <div key={index} className="form-check form-check-inline">
        <label className="form-check-label">
          <input  className="form-check-input" type="checkbox" onChange={handletoolCheckboxChange}  checked={tools.includes(item)}  name={item} value={item}  />
          {item}
          </label>
        </div>))

    const proglangoptions =programmingLanguages.map((item, index) => (
      <div key={index} className="form-check form-check-inline">
        <label className="form-check-label">
          <input  className="form-check-input" type="checkbox" onChange={handleproglangCheckboxChange}  checked={proglang.includes(item)}  name={item} value={item}  />
          {item}
          </label>
        </div>))
    

  return (
    <div className='box'>
    <form className='addform'>

        <div className="formgroup">
        <input type="text" id='coursename' className='form-input' value={coursename} onChange={event =>(setCourseName(event.target.value))} required/>
        <label htmlFor="coursename" className='form-label'>Course Name</label>
        </div>
        
        <div className="formgroup">
        <input type="text" id='duration' className='form-input' value={duration} onChange={event =>(setDuration(event.target.value))} required/>
        <label htmlFor="duration" className='form-label'>Course Duration</label>
        </div>

        <div className="formgroup ">
        <label htmlFor="tools" className='form-label-check' >Tools Covered</label>
        {tooloptions}
        </div>

        <div className="formgroup">
        <label htmlFor="plang" className='form-label-check'>Programming Languages</label>
        {proglangoptions}
        </div>

        <div className="formgroup">
        <textarea id='syllabus' className='form-input para-input' value={syllabus} onChange={event =>(setSyllabus(event.target.value))} required/>
        <label htmlFor="syllabus" className='form-label'>Syllabus Covered</label>
        </div>

        <div className="bottom-box">
            <button className='form-button'  onClick={createcourse}>Add</button>
            <button className='form-button' onClick={clear}>clear</button>
        </div>
    </form>
</div>
  )
}

export default AddCourse