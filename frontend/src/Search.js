import React, { useState, useEffect, useContext } from 'react'
import {JoblyApi} from "./api"
import CompanyCard from './CompanyCard'
import CompanyList from './CompanyList'
import { Link } from 'react-router-dom'



const Search = (handle) => {

    const initialState =[]
    const [data, setData] = useState()
    const [formData, setFormData] = useState(initialState)
    const handleSubmit = (e) => {e.preventDefault();
    
       setFormData(e.target.value);
         
     }

    useEffect(() => {
        getSearch()

    }, []);

    async function getSearch() {
    
        try{
            const res = await JoblyApi.getSearch(handle)
            console.log(res)
            setFormData(res)
        } catch (err) {
            console.log(err)
        }
     
}

console.log(formData)
return (
  <div>
      {/* <form className="searchbar">
                <input id="Search Company" type="text" placeholder= "search" onChange={handleSubmit} value={formData}></input>
                <Link to="search">
                <button onClick={setFormData}>Search</button> 
                </Link> 
            </form>  */}
  
    <h1>Testing</h1>
    {/* {data.map(c => (
        <CompanyCard
        key= {c.handle}
        description = {c.description}
        name = {c.name} />

    ))} */}
    </div>
)

}

export default Search