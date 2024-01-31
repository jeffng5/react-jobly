import React from 'react'
import "./App.css"
import AbridgedNavBar from "./AbridgedNavBar"




const Homepage = () => {
 
return(
<>
    <div>
    <AbridgedNavBar />
    </div>
    

        <div className='title'>
        <h1>Welcome to Jobly!</h1>
        <h1>Please Login or Sign Up to Continue.</h1>
        </div>
    </>
    )
}


export default Homepage