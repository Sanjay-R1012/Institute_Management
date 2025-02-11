import React from 'react'

const AddStaff = () => {
  return (
    <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='name' className='form-input' required/>
            <label htmlFor="name" className='form-label'>Staff Name</label>
            </div>

            <div className="formgroup">
            <input type="text" id='course' className='form-input' required/>
            <label htmlFor="course" className='form-label'>Handling Course Name</label>
            </div>
            
            <div className="formgroup">
            <input type="text" id='joining-date' className='form-input' required/>
            <label htmlFor="joining-date" className='form-label'>Date of Joining</label>
            </div>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="text" id='password' className='form-input' required/>
            <label htmlFor="password" className='form-label'>Password</label>
            </div>

            <div className="formgroup">
            <input type="text" id='type' className='form-input' required/>
            <label htmlFor="type" className='form-label'>online or offline</label>
            </div>

            <div className="formgroup">
            <input type="text" id='classno' className='form-input' required/>
            <label htmlFor="classno" className='form-label'>Assign classroom</label>
            </div>

            <div className="bottom-box">
                <button className='form-button'>Add</button>
                <button className='form-button'>clear</button>
            </div>
        </form>
    </div>
  )
}

export default AddStaff