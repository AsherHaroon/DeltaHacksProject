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
                    <NavLink to="/my-investments">
                        My Investments
                    </NavLink>
                    <NavLink to="/create-post">
                        Pitch Your Idea
                    </NavLink>
                </NavMenu>
                <div className="authentication-container">
                    Logged in as {localStorage.getItem('name')}
                </div>
            </Nav>
        </div>
    )
}

export default NavBar;