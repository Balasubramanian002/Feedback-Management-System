import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Admin.css'
export default function Admin() {
  const[post,setpost]=useState([])
  const[popup,setpopup]=useState(false)
  const[name,setname]=useState('')
  const[feed,setfeed]=useState('')
  const[id,setid]=useState('')
  useEffect(()=>{
    axios.get('http://localhost:3001/Feedback')
    .then(res=>setpost(res.data))
    })
    
    
  const openpopup=(id)=>{
    const feedback=post.find(item=>item.id===id);
    setpopup(true)
    setname(feedback.name)
    setfeed(feedback.feed)
    setid(id)
  }

  const handleupdate=(e)=>{
    e.preventDefault();
     axios.put(`http://localhost:3001/Feedback/${id}`,{"name":name,"feed":feed})
     .catch(res=>console.log(res.data))
     
  }
  const handledelete=(id)=>{
    axios.delete(`http://localhost:3001/Feedback/${id}`)
    .then(res=>{
      console.log(res.data)
      setpost(post.filter(x=>x.id!==id));
    })

  }

  return (
    <div className='admin-page'>
        {
          post.map(x=>(
            <div className='flex-items' key={x.id}> 
                <h1>{x.name}</h1>
                <p>{x.feed}</p>

                <button onClick={()=>openpopup(x.id)}>Update</button>&emsp;&emsp;
                <button onClick={()=>handledelete(x.id)}>Delete</button>
             </div>
          ))
        }
        {popup && <div className='popup'><form onSubmit={handleupdate}>
            <button class='popbutton' onClick={()=>setpopup(false)}>x</button>
            <input type='text' value={name} placeholder=' Enter name' onChange={(e)=>setname(e.target.value)}/>
            <br></br>
            <br></br>
            
            <textarea  value={feed} onChange={(e)=>setfeed(e.target.value)}></textarea>
            <br></br>
            <br></br>
            <button type='submit'>Update</button>
          </form>
          </div>}
    </div>
  )
}
