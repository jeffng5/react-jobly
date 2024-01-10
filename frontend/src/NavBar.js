import React from "react";
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
    return (
        <div>
            <Navbar expand="md" >
                <NavLink exact to ="/" className="navbar-brand">
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

                    <div className= 'link'>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                    <div className= 'link'>
                        <NavLink to="/signup">Sign Up</NavLink>
                   </div>
                   <div className= 'link'>
                        <NavLink to="/profile">Profile</NavLink>
                        </div>
                    </NavItem>
                
                
                
                </Nav>

            </Navbar>

        </div>
    )
}


export default NavBar;