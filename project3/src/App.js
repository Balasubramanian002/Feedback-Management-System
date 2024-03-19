import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Signup from './component/Signup';
import Admin from './component/Admin';
import Auth from './component/Auth';
import Profile from './component/Profile';
import User from './component/User';
function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/Login" element={<Login/>}/> 
          <Route path="/users" element={<User/>}/> 
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Admin" element={<Admin/>}/>   
          <Route path="/profile" element={<Profile/>}/> 
        </Routes>
        </Auth>
    </div>
  );
}

export default App;
