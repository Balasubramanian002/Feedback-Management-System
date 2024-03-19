import React, { useEffect, useState } from 'react'
import './Login.css'
import { UseAuth } from './Auth'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const navigate = useNavigate()
    const[name,setname]=useState('')
    const[pass,setpass]=useState('')
        const[userList,setuserList]=useState([])
        useEffect(()=>{
            axios.get("http://localhost:3001/users")
            .then(res=>setuserList(res.data))
            .catch(err=>console.log(err))
        })
    
     const auth=UseAuth()
    
     const handleLogin=()=>
     {

        const userExist=userList.some(u=>u.Username === name && u.password === pass)
        if(userExist){
            auth.Login(name)
            console.log("Signed in")
           navigate('/')

        }
        else{
            alert("Invalid user and password")
        }
     }
    
  return (
    <div className='LoginPage'>
       <form onSubmit={handleLogin}>
          <div className="head">
            
            <h3>Signin</h3>
          </div>
          <div className="field">
               <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} required/>
               <input type="text" placeholder="Password" value={pass} onChange={(e)=>setpass(e.target.value)}required/>
          </div>
          <br></br>
          <button type='submit'>login</button>
          <Link to='/Signup'>Don't Have an account Signup</Link>
       </form>
       </div>
  )
  }

export default Login
