import React, { useState, useEffect } from 'react'
import './SignUp.css'
import {JoblyApi} from "./api"
import { jwtDecode } from "jwt-decode"
import AbridgedNavBar from "./AbridgedNavBar"
import NavBar from "./NavBar"
import { useNavigate } from 'react-router-dom'

const token = localStorage.getItem('res.token')

const Login = () => {
//redirectin purposes
    const navigate = useNavigate()

    const [formData, setFormData] = useState("")

//handleChaneg function to capture changes in form    
const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({...formData,[name]: value }))
}



// function to login user + make API call to backend with formData
    async function loginUser(e) {
        console.log('I am here')
        e.preventDefault();
        
        const res = await JoblyApi.loginUser(formData.username, formData.password)
        console.log(res)
        localStorage.setItem("res.token", res.token)
        console.log("THE TOKEN IS SET!")
        navigate('/companies') 
 
    }


return (
    <> 

 
      <AbridgedNavBar />  
    <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" name='username'placeholder= "username"
            onChange={handleChange} value={formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" name= 'password' onChange={handleChange} placeholder= "password" value={formData.password}></input>
            </div>

         <button  onClick={loginUser}>Login</button>
      
        </form>
          
    </>
)
}



export default Login