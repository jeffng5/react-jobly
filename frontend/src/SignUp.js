import React, { useState } from 'react'
import './SignUp.css'
import { JoblyApi } from "./api"
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    
    const navigate = useNavigate()
    const [formData, setFormData] = useState([])
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({...formData, [name]: value}))
        console.log(formData)
    }

    async function SignUpUser(e) {
        console.log("Register!")
        console.log(formData)
        e.preventDefault();
        const res = await JoblyApi.signUp(formData.username, formData.password, formData.firstName,
            formData.lastName, formData.email)
        localStorage.setItem("res.token", res.token)
        navigate('/companies')
    
    }


    return(
        <>
        <body>
            <h1> Please Sign Up </h1>
        <form>
            <div className= "sign-in-form">
            <input id= "username" type = "text" placeholder= "username" name="username" value= {formData.username} onChange={handleChange}></input></div>
            <div className= "sign-in-form">
            <input id= "password" type = "text" placeholder= "password" name='password' value= {formData.password} onChange={handleChange}></input></div>
            <div className= "sign-in-form">
            <input id= "first_name" type= "text" placeholder = "first name" name='firstName' value={formData.firstName} onChange={handleChange}></input></div>
            <div className= "sign-in-form">
            <input id= "last_name" type= "text" placeholder= "last name" name='lastName' value={formData.lastName} onChange={handleChange}></input></div>
            <div className= "sign-in-form">
            <input id= "email" type= "text" placeholder= "email" name= 'email' value={formData.email} onChange={handleChange}></input></div> 
            <button onClick={SignUpUser}>Sign Up</button>
        </form>
       
        </body>
        </>

    )
}


export default SignUp