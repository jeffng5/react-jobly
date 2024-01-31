import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "reactstrap";

let token = localStorage.getItem("res.token")



//main Navbar
const NavBar = () => {


if (token)
    return (
        <div>
            <Navbar expand="md" >
                <NavLink exact to ="" className="navbar-brand">
                    JOBLY
                </NavLink>
                
                <Nav className="ml-auto" navbar>
                
                    <NavItem>
                        <div className= "link">
                        <NavLink to= "/companies">Companies</NavLink>
                    </div>
                  
                        <div className='link'>
                        <NavLink to="/jobs">Jobs</NavLink>
                        </div>
{/* 
                    <div className= 'link'>
                        <NavLink to="/users/login">Login</NavLink>
                    </div> */}
                    {/* <div className= 'link'>
                        <NavLink to="/signup">Sign Up</NavLink>
                   </div> */}
                   <div className= 'link'>
                        <NavLink to="/profile">Profile</NavLink>
                        </div>
                    <div className= 'link'>
                        <NavLink to='/logout'>Log Out</NavLink>
                    </div>
                    </NavItem>
                
                
                
                </Nav>

            </Navbar>

        </div>
    )

else {

    return(
    <>
    <div className= 'link'>
    <NavLink to="/users/login">Login</NavLink>
</div> 
<div className= 'link'>
    <NavLink to="/signup">Sign Up</NavLink>
</div></> )
}
}
   


export default NavBar;