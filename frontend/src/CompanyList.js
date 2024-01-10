import React, { useState, useEffect } from "react"
import {JoblyApi} from "./api"
import CompanyCard from "./CompanyCard"
import "./SignUp.css"
import { Link } from 'react-router-dom';



const CompanyList = ({submitFormSearch}) => {
    const initialState = []
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState([])

    const handleSubmit = (e) => {e.preventDefault();
        submitFormSearch(formData.search)
       
        setFormData(initialState)
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


    return (
        <div>
            <form className="searchbar">
                <input id="Search Company" type="text" placeholder= "search" value={formData.search}></input>
                <Link to="search">
                <button onClick={handleSubmit}>Search</button> 
                </Link> 
            </form> 
        {data.map(c => (
            <CompanyCard 
            key = {c.handle}
            description ={c.description}
            name= {c.name}
            logoUrl = {c.logoUrl}
        />))}
        </div>

    )
        }




export default CompanyList