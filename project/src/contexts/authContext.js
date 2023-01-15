import React, { createContext, useContext, useEffect, useState } from "react";
import { generateUser } from "../utils/generateUser";

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() =>{
        if (!isLoggedIn) {
            const userid = localStorage.getItem('userid')
            if (userid) setIsLoggedIn(true)
            else {
                generateUser().then(({id, name}) => {
                    localStorage.setItem('userid', id)
                    localStorage.setItem('name', name)
                    setIsLoggedIn(true)
                }).catch((e) => console.log(e))
            }
        }
    }, [])

    return (
        <AuthContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
            { children }
        </AuthContext.Provider>
    )
}

const USER_OBJ = {

}