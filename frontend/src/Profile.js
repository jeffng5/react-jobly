import React, { useState, useEffect, useContext } from  'react'
import { JoblyApi } from "./api"
import UserContext from "./UserContext"


const Profile = () => {
    const username = useContext(UserContext)
    const [data, setData] = useState("")
    const [formData, setFormData]= useState("")
    
    useEffect(()=> {
        currentUser()
    }, [setData]);


    async function currentUser(){
        try{
        const res = await JoblyApi.getUsers(username)
        console.log(res)
        setData(res)
        return res
    } catch (err) { console.log(err)
} console.log(data)}

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(formData => ({...formData, [name]: value}))
      
    }
    console.log(formData)
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const res = await JoblyApi.editUser(username, formData.firstName, formData.lastName)
            console.log(res)
        }
        catch (err) {
            console.log(err)
        } console.log(formData)
    
    }

    return (
        <>
        <h1>Edit Profile Page</h1>

      <h2>Hi {username}, </h2>
        <form className = "searchbar">
          
            <div>
            <input id = "first_name" type='text' placeholder= "first name"
            value={formData.firstName} onChange={handleChange} name='firstName'></input>
            </div>
            <div>
            <input id = "last_name" type='text' placeholder= "last name"
            value={formData.lastName} onChange={handleChange} name='lastName'></input>
            </div>
            <div>
            <label for= "is_admin">is admin?</label>
            <input id = "is_admin" type='radio' value= "true"
            name={formData.is_admin}></input>
            <label for='true'>true</label>
            <input id = "is_admin" type='radio' value= "false"
            name={formData.is_admin}></input>
            <label for='false'>false</label>
            </div>
            <button onClick={handleSubmit}>submit</button>
        </form>
           

  
</>
    )
}







export default Profile;