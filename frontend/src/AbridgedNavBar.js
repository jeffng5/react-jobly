import "./NavBar.css"
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "reactstrap";


const AbridgedNavBar =() => {

return (
    <Navbar expand="md" >
    <NavLink exact to ="/" className="navbar-brand">
        JOBLY
    </NavLink>
    
    <Nav className="ml-auto" navbar>
    
        <NavItem>

        <div className= 'link'>
            <NavLink to="/users/login">Login</NavLink>
        </div>
        <div className= 'link'>
            <NavLink to="/signup">Sign Up</NavLink>
       </div>

        </NavItem>
    
    
    
    </Nav>

</Navbar>

)}

export default AbridgedNavBar