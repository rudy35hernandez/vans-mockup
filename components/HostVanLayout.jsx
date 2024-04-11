import React from "react"
import {NavLink, Outlet} from "react-router-dom"

export default function HostVanLayout(){
    return (
        <>
            <nav>
                <NavLink
                    to="."
                    end
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photos"
                >
                    Photos
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}