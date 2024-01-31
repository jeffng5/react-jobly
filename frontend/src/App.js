import React from 'react'
import './App.css';
import Company from "./Company-Detail"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CompanyList from "./CompanyList"
import Jobs from "./Jobs"
import Login from "./Login"
import SignUp from "./SignUp"
import Profile from "./Profile"
import CompanySearch from "./CompanySearch"
import LogOut from "./LogOut"
import Homepage from './Homepage'


// IN CASE YOU POP OFF THE TOKEN BY ACCIDENT

// localStorage.setItem("res.token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
// "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
// "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc")



//main app file, mapping out endpoints to app and their component
function App() {

     
   return (
  
    <div>
                 
    <BrowserRouter>
  
    <Routes>
      <Route exact path = "/" element={<Homepage />}></Route>
      
       <Route exact path="/companies" element={<CompanyList />}></Route>

       <Route exact path="/companies/:handle" element={<Company />}></Route> 
       
       <Route exact path="/jobs" element={<Jobs />}></Route>

       <Route exact path="/jobs/:companyHandle" element={<Company />}></Route>
      
       <Route exact path="/users/login" element={<Login />}></Route>

       <Route exact path="/signup" element={<SignUp />}></Route>

       <Route exact path="/profile" element={<Profile />}></Route> 

       <Route exact path="/companies/search" element={<CompanySearch />}></Route>

       <Route exact path="/logout" element={<LogOut />}></Route>
  
       </Routes>
       
    </BrowserRouter>  

    </div>
 
)
}



export default App;
