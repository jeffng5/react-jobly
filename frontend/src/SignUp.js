import React, { useState } from 'react'
import './SignUp.css'

const SignUp = ({submitForm}) => {
    const initialState =[]
    const [formData, setFormData] = useState(initialState)
    const handleSubmit = (e) => { e.preventDefault();
        submitForm(formData.username)
        setFormData(initialState)

    }
    return(
        <>
        <body>
            <h1> Please Sign Up </h1>
        <form>
            <div className= "sign-in-form">
            <input id= "username" type = "text" placeholder= "username" value= {formData.username}></input></div>
            <div className= "sign-in-form">
            <input id= "password" type = "text" placeholder= "password" value= {formData.password}></input></div>
            <div className= "sign-in-form">
            <input id= "first_name" type= "text" placeholder = "first name" value={formData.firstname}></input></div>
            <div className= "sign-in-form">
            <input id= "last_name" type= "text" placeholder= "last name" value={formData.lastname}></input></div>
            <div className= "sign-in-form">
            <input id= "email" type= "text" placeholder= "email" value={formData.enail}></input></div> 
        </form>
        <button onClick={handleSubmit}>Sign Up</button>
        </body>
        </>

    )
}


export default SignUp