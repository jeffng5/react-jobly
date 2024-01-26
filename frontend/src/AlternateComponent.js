import React, {useState, useEffect, useContext} from 'react'
import { JoblyApi } from "./api"
import UserContext from "./UserContext"


const AlternateComponent = ({id, title}) => {
    
    const username = useContext(UserContext)
if (username)
    return (
    <>

    
      <div className="card-body">
        <h6 className="card-title">
    
          <h4>{id}</h4>
          <h2>You applied for: {title}</h2>

         
        </h6>
       
      </div>

    </>)


    }


    export default AlternateComponent