import React from "react";
import { UseAuth } from "./Auth";
import './profile.css'
import image from './Person.png'
import { useNavigate } from "react-router-dom";
const Profile = ()=>
{
    const auth = UseAuth()
    const navigate=useNavigate()
    const handlenavigate=()=>{     
    navigate('/users')
    }
    const handlelogout=()=>{
       if(auth.user)
       {
        auth.Logout()
        navigate('/')
       }
       else{
        alert('No user logged in')
       }
    }
return(

        
    <div className="profile-div">
    <div className="outer">
            <div className="card">
               <img src={image} width="60" height="60"/>
               <h2>Welcome</h2>
               <h3>{auth.user}</h3>
               <button className="b1" onClick={handlelogout}>Logout</button>
               &emsp; &emsp;
               <button className="b1" onClick={handlenavigate}>Add Feedback</button>
            </div>
    </div>
    </div>

)
}
export default Profile