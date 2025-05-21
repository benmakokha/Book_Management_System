import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import DashBoard from './DashBoard'

function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        paswword: '',
     })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('http://localhost:5000/user', values)
        .then((res)=>{
            
            navigate('/DashBoard')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='container vh-100 vw-100 bg-primary'>
        <div className='row'>
            <h3>Create Account</h3>
            <div className='d-flex justify-content-end'>
                <Link to='/' class='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group my-3'>
                    <label htmlFor='name'>User Name</label>
                    <input type='text' name='username' required onChange={(e)=> setValues({...values, username: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} />
                </div>
                <div className='form-group my-3'>
                    <label htmlFor='gender'>Password</label>
                    <input type='text' name='password' required onChange={(e)=> setValues({...values, paswword: e.target.value})} />
                </div>
                
                <div className='form-group my-3'>
                    <button type='submit' className='btn btn-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register;