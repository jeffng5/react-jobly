import React, { useState } from  'react'
import { JoblyApi } from "./api"
import UserCard from "./UserCard"


const Profile = () => {
    const INITIAL_STATE =[]
    const [data, setData] = useState(INITIAL_STATE)
    
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

    return (
        <>
        <h1>Edit Profile Page</h1>
        {data.map(c => (
            <UserCard
            username = {c.username}

            />

        )
            
    

    )
        }
</>
    )
}







export default Profile