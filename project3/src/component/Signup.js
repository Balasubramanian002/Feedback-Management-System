import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Signup.css'
const Signup = () => {
    const[username,setUsername]=useState('')
const[Email,setemail]=useState('')
const[password,setpass]=useState('')
const handleSignup=()=>
{
    axios.post('http://localhost:3001/users',{"Username":username,"password":password,"email":Email})
}
  return (
    <div className='Signup'>
         <form onSubmit={handleSignup}>
            <br></br>
            <h2>Signin</h2>
            <br></br>
            <br></br>
            
            <input type='text' value={username} placeholder='name' onChange={(e)=>setUsername(e.target.value)}/>
            <br></br>
            <br></br>
            
            <input type='text' value={password} placeholder='password' onChange={(e)=>setpass(e.target.value)}/>
            <br></br>
            <br></br>
            
            <input type='text' value={Email}  placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
            <br></br>
            <br></br>
            <button type='submit'>Signup</button>
            <br></br>
            <Link to="/Login">Already have an account?Login</Link>
            </form>   
            
    </div>
 )
}

export default Signup
 