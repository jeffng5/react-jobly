import React, { useState } from 'react'
import './SignUp.css'
import {JoblyApi} from "./api"

const Login = () => {
  
    const [formData, setFormData] = useState("")


// function to login user + make API call to backend with formData
    async function loginUser(e) {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value })
        const res = await JoblyApi.loginUser(formData.username, formData.password, formData.firstName, formData.lastName, formData.email)
        console.log(res)
        console.log(formData)
    }

    // console.log(localStorage.getItem(JoblyApi.token))
    

return (
    <>  
    <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" name='username'placeholder= "username" value={formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" name= 'password' placeholder= "password" value={formData.password}></input>
            </div>
            <div className= "log-in-form">
            <input id= "first_name" type= "text" name='firstName' placeholder = "first name" value={formData.firstName}></input></div>
          
            <div className= "log-in-form">
            <input id= "last_name" type= "text" name='lastName' placeholder= "last name" value={formData.lastName}></input></div>
           
            <div className= "log-in-form">
            <input id= "email" type= "text" name= 'email' placeholder= "email" value={formData.email}></input></div> 
        
            <button onSubmit={loginUser}>Login</button>
        </form>
              
    </>


)
}

export default Login