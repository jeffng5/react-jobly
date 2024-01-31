import React, { useState, useEffect, useContext } from "react"
import { JoblyApi } from "./api"
import CompanyCard from "./CompanyCard"
import "./SignUp.css"
import NavBar from "./NavBar"
import { jwtDecode } from "jwt-decode"


//show list of companies in db
const CompanyList = () => {

    // token storage for if user is logged in
    const localToken = localStorage.getItem('res.token')
    const decoded2= jwtDecode(localToken)
    console.log(decoded2.username)
    let username = decoded2.username
    
    
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState("")


    const handleChange = (e) => {

      setFormData(e.target.value);
        
    }

    useEffect(() => {
        getAllCompanies();
      

    }, []);

    async function getAllCompanies() { 
        try{
            const res = await JoblyApi.getAllCompanies()
            console.log(res)
            setData(res)
        } catch (err) {
        console.log(err)
        }
    }
 //search function for search form data
    async function getSearchTerm(e) {
        e.preventDefault();
        try{
//makes API call to backend for list. This query has an ilike 
            const res = await JoblyApi.getSearch(formData)
            setData(res.companyList)
        }
        catch (err) {
            console.log(err)
        }

    }
    
    console.log(formData)


//conditional to protect route and see if user is logged in
if (username)
    return (
        <div>
            <NavBar />
            <form className="searchbar">
                <input id="Search Company" type="text" placeholder= "search companies" onChange={handleChange} value={formData}></input>
                {/* <Link to = 'search'> */}
                <button onClick={getSearchTerm}>Search</button> 
                {/* </ Link> */}
            </form> 
        {data.map(c => (
            <CompanyCard 
            key = {c.handle}
            handle = {c.handle}
            description ={c.description}
            name= {c.name}
            logoUrl = {c.logoUrl}
        />))}
        </div>

    )

   

        }




export default CompanyList