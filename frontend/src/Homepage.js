import React from 'react'
import NavBar from "./NavBar"
import "./App.css"
import Login from "./Login"
import AbridgedNavBar from "./AbridgedNavBar"
import { jwtDecode } from "jwt-decode"

// const token = localStorage.getItem("res.token")
// const decoded = jwtDecode(token)
// const username = decoded.username

const Homepage = () => {



// if (username)
//     return (
//    <>
//     <NavBar />
//     <h3>Welcome to Jobly, <p>{username}!</p></h3>
//     </>
//     )
// else{    
return(
<>
        <AbridgedNavBar />
        <h1>Welcome to Jobly!</h1>
        <h1>Please Login or Sign Up to Continue.</h1>
    </>
    )
}


export default Homepage