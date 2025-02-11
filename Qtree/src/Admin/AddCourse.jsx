import React from 'react'
import { useState } from 'react'

const AddCourse = () => {
  const [coursename,setCourseName]=useState('')
  const [duration,setDuration]=useState('')
  const [tools,setTools]=useState('')
  const [proglang,setProglang]=useState('')
  const [syllabus,setSyllabus]=useState('')

  const submit =() => {
    console.log({
    coursename,
    duration,
    tools,
    proglang,
    syllabus})
  }

  const clear =() =>{
    setCourseName('')
    setDuration('')
    setTools('')
    setProglang('')
    setSyllabus('')
  }


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

        <div className="formgroup">
        <textarea  id='tools' className='form-input para-input' value={tools} onChange={event =>(setTools(event.target.value))} required/>
        <label htmlFor="tools" className='form-label' >Tools Covered</label>
        </div>

        <div className="formgroup">
        <textarea id='plang' className='form-input para-input' value={proglang} onChange={event =>(setProglang(event.target.value))} required/>
        <label htmlFor="plang" className='form-label'>Programming Languages</label>
        </div>

        <div className="formgroup">
        <textarea id='syllabus' className='form-input para-input' value={syllabus} onChange={event =>(setSyllabus(event.target.value))} required/>
        <label htmlFor="syllabus" className='form-label'>Syllabus Covered</label>
        </div>

        <div className="bottom-box">
            <button className='form-button' type='submit' onClick={submit}>Add</button>
            <button className='form-button' onClick={clear}>clear</button>
        </div>
    </form>
</div>
  )
}

export default AddCourse