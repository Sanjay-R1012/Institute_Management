import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    useEffect(() => {
        const fetchData =async () =>{

            const token ={
                refresh_token :localStorage.getItem('Refresh')
            }

            axios.post('http://127.0.0.1:3000/auth/token/',token)
            .then(response =>{
                console.log('Auto Logging')
                localStorage.setItem('Bearer',response.data.access_token)
            })
            .catch(error => console.log(error))
        }
        fetchData()

        setInterval(fetchData,30000)
    },[])

      

    const submit = () =>{
        const user_data = {
            email,
            password
        }

        axios.post('http://127.0.0.1:3000/auth/login/', user_data)
        .then(response => {
            if(response.data.status == true){
                console.log(response.data.refresh_token);
                localStorage.setItem('Bearer',response.data.access_token)
                localStorage.setItem('Refresh',response.data.refresh_token)
                localStorage.setItem('email',email)
            }
            else{
                alert(response.data.message)
                localStorage.clear()
            }
            

            axios.post('http://127.0.0.1:3000/auth/user/role/',user_data)
                .then(response =>{ localStorage.setItem("role",response.data)
                    if(response.data == "staff"){
                        navigate('/staff/timetable/')
                    }
                    else if(response.data == "admin"){
                         navigate('/admin/students/')
                    }
                    else{
                        navigate('/student/data/')
                    }

                })
                .catch(error => console.log(error))
            console.log(response.data)
        })
        .catch(error => console.log(error))

    }

    const clear =() =>{
        setEmail("")
        setPassword("")
    }


  return (
        <div className='box'>
        <form className='addform'>

            <div className="formgroup">
            <input type="text" id='email' className='form-input' value={email} onChange={event =>(setEmail(event.target.value))} required/>
            <label htmlFor="email" className='form-label'>Email</label>
            </div>

            <div className="formgroup">
            <input type="password" id='password' className='form-input' value={password} onChange={event =>(setPassword(event.target.value))} required/>
            <label htmlFor="password" className='form-label'>Password</label>
            </div>


            <div className="bottom-box">
                <button className='form-button' type='button' onClick={submit}>Log in</button>
                <button className='form-button' onClick={clear}>clear</button>
            </div>
        </form>
        </div>
  )
}

export default Login