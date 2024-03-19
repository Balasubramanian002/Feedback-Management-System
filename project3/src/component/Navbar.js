import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import logo from './logo.png'
import { UseAuth } from './Auth'
export default function Navbar() {
    const auth=UseAuth()
  return (
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <div className="head-txt">
                        <h3>Feedback Management System
                        </h3>
                    </div>
                </div>
                <div className="nav-bar">
                    
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        {auth.user==='admin' && <NavLink to='/admin'>Admin</NavLink>}
                        {!auth.user==='admin' && <NavLink to='/users'>Users</NavLink>}
                        {!auth.user && <NavLink to='/login'>Login</NavLink>}
                        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
                        <NavLink to='/profile'>profile</NavLink>
                    </ul>
                </div>
        </div>    
    
  )
}
