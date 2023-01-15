import React from "react";
import './NavBar.css';
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLinkSignUp, NavBtnLinkLogIn } from "./NavBarElems";

const NavBar = () => {
    return (
        <div>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to="/">
                        Dashboard
                    </NavLink>
                    <NavLink to="/portfolio">
                        Portfolio
                    </NavLink>
                    <NavLink to="/create-post">
                        Pitch Your Idea
                    </NavLink>
                </NavMenu>
                <div className="authentication-container">
                    <div className="authentication-text-1">
                        Logged in as 
                    </div>
                    <div className="authentication-text-2">
                        {localStorage.getItem('name')}
                    </div>
                </div>
            </Nav>
        </div>
    )
}

export default NavBar;