import React, { useState, useEffect } from "react"
import {JoblyApi} from "./api"
import CompanyCard from "./CompanyCard"
import "./SignUp.css"
import { Link } from 'react-router-dom';
import SearchContext from "./SearchContext"



const CompanyList = () => {
    const initialState = []
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState(initialState)


    const handleSubmit = (e) => {e.preventDefault();
       <SearchContext.Provider value = {setFormData}>e.target.value</SearchContext.Provider>
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
                <input id="Search Company" type="text" placeholder= "search" onChange={handleSubmit} value={formData}></input>
                <Link to="search">
                <button onClick={handleSubmit}>Search</button> 
                </Link> 
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