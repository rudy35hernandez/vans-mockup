import React from "react"
import {Navigate, Outlet} from "react-router-dom"

export default function AuthRequired(){
    const authenticated = false

    if(!authenticated){
        return <Navigate to="/Login" state={{message: "You must login first"}}/>
    }

    
    return (
        <Outlet />
    )
}