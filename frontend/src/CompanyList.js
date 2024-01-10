import React, { useState, useEffect } from "react"
import {JoblyApi} from "./api"
import CompanyCard from "./CompanyCard"



const CompanyList = () => {
    const [data, setData] = useState([]);

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