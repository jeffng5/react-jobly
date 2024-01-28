import React, { useContext } from "react"
import { redirect } from 'react-router-dom'
import { jwtDecode } from "jwt-decode"

const LogOut = () => {
    const localToken = localStorage.getItem('res.token')
    const decoded2= jwtDecode(localToken)
    console.log(decoded2.username)
    let username = decoded2.username    

    async function deleteUser (){ 
        const result = localStorage.clear()
    }

    setTimeout(deleteUser, 2000)
    return (
        <>
        <h2>Thanks for Visiting! <p>{username}</p> You are logged out! </h2>
  
        </>
        )
        
    }


export default LogOut