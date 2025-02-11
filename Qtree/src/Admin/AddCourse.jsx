import React from 'react'

const AddCourse = () => {
  return (
    <div className='box'>
    <form className='addform'>

        <div className="formgroup">
        <input type="text" id='coursename' className='form-input' required/>
        <label htmlFor="coursename" className='form-label'>Course Name</label>
        </div>
        
        <div className="formgroup">
        <input type="text" id='duration' className='form-input' required/>
        <label htmlFor="duration" className='form-label'>Course Duration</label>
        </div>

        <div className="formgroup">
        <input type='text' id='tools' className='form-input' required/>
        <label htmlFor="tools" className='form-label'>Tools Covered</label>
        </div>

        <div className="formgroup">
        <input type="text" id='plang' className='form-input' required/>
        <label htmlFor="plang" className='form-label'>Programming Languages</label>
        </div>

        <div className="formgroup">
        <input type="text" id='syllabus' className='form-input' required/>
        <label htmlFor="syllabus" className='form-label'>Syllabus Covered</label>
        </div>

        <div className="bottom-box">
            <button className='form-button'>Add</button>
            <button className='form-button'>clear</button>
        </div>
    </form>
</div>
  )
}

export default AddCourse