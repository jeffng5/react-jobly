import React, { useState } from 'react'
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




function App() {
  // const INITIAL_STATE =[]
  // const [formData, setFormData] = useState(INITIAL_STATE)
  // const [searchData,setSearchData] = useState(INITIAL_STATE)
  // const submitForm = (username) => {setFormData(formData => [...formData, {username}])}
  // const submitFormSearch = (term) =>{setSearchData(searchData => [...searchData, {term}])}
  // console.log(searchData)
  
  return (
  
    <div className="App">
        
    <BrowserRouter>
    <NavBar /> 
 
    <Routes>
      <Route exact path="/"></Route>

       <Route exact path="/companies" element={<CompanyList />}></Route>

       <Route exact path="/companies/:handle" element={<Company />}></Route> 
       
       <Route exact path="/jobs" element={<Jobs />}></Route>

       <Route exact path="/jobs/:companyHandle" element={<Company />}></Route>

       <Route exact path="/login" element={<Login />}></Route>

       <Route exact path="/signup" element={<SignUp />}></Route>

       <Route exact path="/profile" element={<Profile />}></Route> 

       <Route exact path="/companies/search" element={<CompanySearch />}></Route>

    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
