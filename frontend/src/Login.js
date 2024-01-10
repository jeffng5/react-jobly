import React, { useState } from 'react'
import './SignUp.css'

const Login = () => {
    const initialState = []
    const [formData, setFormData] = useState(initialState)


return (
    <>
        <body>
            <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" placeholder= "username" value= {formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" placeholder= "password" value= {formData.password}></input>
            </div>
        </form>
            
            
            </body>    
    </>


)
}

export default Login