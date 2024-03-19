import React, { useState } from 'react'
import { UseAuth } from './Auth' 
import './home.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const auth = UseAuth()
  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[message,setmessage]=useState('')
  const navigate=useNavigate()
  const handleMessage=()=>{
    axios.post('http://localhost:3001/Message',{"Name":name,"email":email,"message":message})
  }
  const MovetoUser=()=>{
    if(auth.user){
    navigate('/users')
    }
    else{
      navigate('/login')
    }
  }
  
  return (
    <div className="Home-page">
    <div className="Addfeed">
        <p>User feedback is a valuable tool for businesses and organizations to understand the experiences and opinions of their customers or users. It provides insights into what is working well and what areas need improvement. Constructive feedback is specific, clear, and focuses on the impact of the product or service. It helps in making informed decisions and enhancing the overall user experience.</p>
        <button onClick={MovetoUser}>AddFeedback</button>
       </div>
   <div className="AboutSystem">
       <h1>About</h1>
        <p>
        Welcome to Feedback Management System, a leading provider of innovative feedback solutions for businesses of all sizes. Our mission is to help organizations gather valuable insights from their customers, employees, and stakeholders to drive continuous improvement and enhance overall satisfaction. With our user-friendly platform, you can easily create, distribute, and analyze feedback surveys tailored to your specific needs. We offer customizable surveys, multi-channel distribution, real-time analytics, automated workflows, and robust data security measures. Join thousands of satisfied customers who trust Feedback Management System for their feedback needs and unlock the power of feedback to drive growth and success for your business.
        </p>
   </div>
   <form onSubmit={handleMessage}>
   <div class="Contact">
        <h2>Contact</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <br></br>
        <br></br>
        <br></br>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <br></br>
        <br></br>
        <br></br>
        <textarea value={message} placeholder='Enter Your Message' onChange={(e)=>setmessage(e.target.value)}></textarea>
        <br></br>
        <br></br>
        <br></br>
        <button type='submit'>Send</button>
   </div>
   </form>

</div>
  )
}
