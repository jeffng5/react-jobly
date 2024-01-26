import React, { useState } from 'react'
import './SignUp.css'
import {JoblyApi} from "./api"
import { jwtDecode } from "jwt-decode"



const Login = () => {
    const [formData, setFormData] = useState("")

const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(formData => ({...formData,[name]: value }))
}

// function to login user + make API call to backend with formData
    async function loginUser(e) {
        console.log('I am here')
        e.preventDefault();
        
        const res = await JoblyApi.loginUser(formData.username, formData.password)
   
        localStorage.setItem("res.token", res.token)
    
    }

    console.log("THE TOKEN IS SET!")
    let token = localStorage.getItem("res.token")    
    console.log(token)
    const decoded = jwtDecode(token)

if (token) {
    return(
    <h2>You are logged in as <p>{decoded.username}!</p></h2>
)}

return (
    <>  
    <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" name='username'placeholder= "username"
            onChange={handleChange} value={formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" name= 'password' onChange={handleChange} placeholder= "password" value={formData.password}></input>
            </div>

    
            <button onClick={loginUser}>Login</button>
    
        </form>
              
    </>


)
}

export default Login