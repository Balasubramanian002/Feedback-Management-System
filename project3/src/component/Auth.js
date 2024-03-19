import React , {useContext,useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext=React.createContext(null)

export const Auth=({children})=>{
    const navigate = useNavigate()
    const[user,setUser]=useState(null)
    const Login=(user)=>{
        setUser(user)
        navigate('/profile')
    }
    const Logout=()=>{
        setUser(null)
        navigate('/')
    }
    return(
   <div>
    <AuthContext.Provider value={{user,Login,Logout}}>
        {children}
    </AuthContext.Provider>
   </div>
    )
}
export const UseAuth=()=>{
    return useContext(AuthContext)
}
export default Auth