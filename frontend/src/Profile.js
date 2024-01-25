import React, { useState } from  'react'
import { JoblyApi } from "./api"
import UserCard from "./UserCard"


const Profile = () => {
 
    const [data, setData] = useState("")
    const [formData, setFormData]= useState({
      
        firstName: '',
        lastName: '',
        email: ''
    })
    
    async function getUsers() {
        try{
            const res = await JoblyApi.getUsers()
            console.log(res)
            setData(res)
            console.log(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
        try{
            const res = await JoblyApi.editUser(formData.username)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <h1>Edit Profile Page</h1>
        {/* {data.map(c => (
            <UserCard
            username = {c.username}/>)
            )
        }
             */}
        <form className = "searchbar">
          
            <div>
            <input id = "first_name" type='text' placeholder= "first name"
            value={formData.firstName}></input>
            </div>
            <div>
            <input id = "last_name" type='text' placeholder= "last name"
            value={formData.lastName}></input>
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







export default Profile