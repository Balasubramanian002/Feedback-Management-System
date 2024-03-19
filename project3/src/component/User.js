import React, { useState } from 'react'
import './user.css'
import topic from './topic.png'
import axios from 'axios'
import { UseAuth } from "./Auth";
export default function User() {
    const[feed,setfeed]=useState('')
    const handleFeed=()=>{
        axios.post('http://localhost:3001/Feedback',{"name":auth.user,"feed":feed})
        alert('Feedback Submitted Successfully')
        auth.Login(auth.user)
    }
  const auth=UseAuth()
  return (
    <div class="user-page">
      <div class="topic">
         <img src={topic}/> 
         <p>The Union government had on Monday implemented the CAA, notifying the rules to fast-track citizenship for undocumented non-Muslim migrants from Pakistan, Bangladesh and Afghanistan who came to India before December 31, 2014. Also read: Understanding the Citizenship (Amendment) Bill, 2019.</p>
      </div>
      <div class="response">
        <input type='text' placeholder='Enter Your feedback' value={feed} onChange={(e)=>setfeed(e.target.value)}/>
        <br></br>
       
        <br></br>
        <br></br>
        <form onSubmit={handleFeed}>
        <button type='submit'>Post Feedback</button>
        </form>
      </div>
    </div>
  )
}
