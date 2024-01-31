import React, {useState, useEffect, useContext} from 'react'

//Alternate component is used to display applied jobs 

const AlternateComponent = ({id, title}) => {
    

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