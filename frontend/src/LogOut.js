import React from "react"


const LogOut = () => {
    // localStorage.setItem("res.token", null)
    console.log(localStorage.getItem("res.token"))

    return (
        <h2>Thanks for Visiting! You are logged out! </h2>
    )
}


export default LogOut