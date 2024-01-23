import React, { useState, useEffect } from "react"
import {JoblyApi} from "./api"
import CompanyCard from "./CompanyCard"
import "./SignUp.css"
import { Link } from 'react-router-dom';
import Search from "./Search"



const CompanyList = () => {
    const initialState = null
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState(initialState)


    const handleSubmit = (e) => {e.preventDefault();

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
   
    console.log(formData)

    return (
        <div>
            <form className="searchbar">
                <input id="Search Company" type="text" placeholder= "search companies" onChange={handleSubmit} value={formData}></input>
                <Link to = 'search'>
                <button onClick={setFormData}>Search</button> 
                </ Link>
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