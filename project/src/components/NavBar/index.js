import React, { useState } from "react";
import './NavBar.css';
import { Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLinkSignUp, NavBtnLinkLogIn } from "./NavBarElems";

const NavBar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

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
                    { isLoggedIn ? (
                            <div>
                                <NavBtn>
                                    <NavBtnLinkSignUp to="/auth/sign-up">
                                        Sign Up
                                    </NavBtnLinkSignUp>
                                </NavBtn>
                                <NavBtn>
                                    <NavBtnLinkLogIn to="/auth/log-in">
                                        Log In
                                    </NavBtnLinkLogIn>
                                </NavBtn>
                            </div>
                        ) : (
                            <div>
                                Logged in as Saaeed
                            </div>
                        )
                    }
                </div>
            </Nav>
        </div>
    )
}

export default NavBar;