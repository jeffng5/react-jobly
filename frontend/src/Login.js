import React, { useState, useEffect } from 'react'
import './SignUp.css'
import {JoblyApi} from "./api"

const Login = () => {
    const initialState = []
    const [formData, setFormData] = useState(initialState)

    useEffect(()=> {
        loginUser();
    }, [])

    async function loginUser(username, password) {
        const res = await JoblyApi.loginUser(username, password)
        console.log(res)
    }


    

return (
    <>
        <body>
            <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" placeholder= "username" ></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" placeholder= "password" ></input>
            </div>
            <button>Login</button>
        </form>
            
            
            </body>    
    </>


)
}

export default Login