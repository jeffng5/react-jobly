import React, { useState, useEffect } from 'react'
import './App.css';
import Company from "./Company-Detail"
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom"
import CompanyList from "./CompanyList"
import Jobs from "./Jobs"
import NavBar from "./NavBar"
import Login from "./Login"
import SignUp from "./SignUp"
import Profile from "./Profile"
import CompanySearch from "./CompanySearch"
import LogOut from "./LogOut"
import { jwtDecode } from "jwt-decode"
import UserContext from "./UserContext"


function App() {

  // const [tokenState, setTokenState] = useState("")
  // const [currentUser, setCurrentUser] = useState("")

let token = localStorage.getItem("res.token")

const decoded = jwtDecode(token)

  return (
    <UserContext.Provider value={decoded.username}> 
    <div className="App">
      
    <BrowserRouter>
   
  
    <NavBar /> 
  
    <Routes>
      <Route exact path = "/"></Route>
      
       <Route exact path="/companies" element={<CompanyList />}></Route>

       <Route exact path="/companies/:handle" element={<Company />}></Route> 
       
       <Route exact path="/jobs" element={<Jobs />}></Route>

       <Route exact path="/jobs/:companyHandle" element={<Company />}></Route>
      
       <Route exact path="users/login" element={<Login />}></Route>

       <Route exact path="/signup" element={<SignUp />}></Route>

       <Route exact path="/profile" element={<Profile />}></Route> 

       <Route exact path="/companies/search" element={<CompanySearch />}></Route>

       <Route exact path="logout" element={<LogOut />}></Route>
  
       </Routes>
       
    </BrowserRouter>  

    </div>
    // </UserContext.Provider> 
  )

}


export default App;
