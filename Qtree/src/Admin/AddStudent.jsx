import React from 'react'
import '../index.css'

const AddStudent = () => {
  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' required/>
            <label htmlFor="name" className='form-label'>Name</label>
            </div>

            <div className="formgroup">
            <input type="text" id='course' className='form-input' required/>
            <label htmlFor="course" className='form-label'>Course Name</label>
            </div>
            
            <div className="formgroup">
            <input type="text" id='enroll-date' className='form-input' required/>
            <label htmlFor="enroll-date" className='form-label'>Date of Enroll</label>
            </div>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="text" id='batchno' className='form-input' required/>
            <label htmlFor="batchno" className='form-label'>Batch No</label>
            </div>

            <div className="formgroup">
            <input type="text" id='staff' className='form-input' required/>
            <label htmlFor="staff" className='form-label'>Assign staff</label>
            </div>

            <div className="formgroup">
            <input type="text" id='time' className='form-input' required/>
            <label htmlFor="time" className='form-label'>Assign Time Slot</label>
            </div>

            <div className="bottom-box">
                <button className='form-button'>Add</button>
                <button className='form-button'>clear</button>
            </div>
        </form>
    </div>
  )
}

export default AddStudent