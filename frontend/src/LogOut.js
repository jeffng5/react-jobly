import React, {useState, useEffect} from "react"


const LogOut = () => {


    const [logout, setLogout] = useState("")
    // localStorage.setItem("res.token", null)
useEffect(()=> { 
    setLogout("")}, [logout]
    );
    return (
        <h2>Thanks for Visiting! You are logged out! </h2>
    )
}


export default LogOut