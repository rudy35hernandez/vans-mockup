import React from 'react'
import  {NavLink, Outlet} from 'react-router-dom'

export default function HostLayout(){

    const activeStyles = {
        fontWeight: "bolder",
        textDecoration: "underline",
        color: "#161616"
    }

    return(
        <>
            <nav className="host-nav">
                <NavLink 
                    to="/host"
                    end
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                        Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    what???????
                </NavLink>
                <NavLink 
                    to="/host/vans"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    HostVansTest
                </NavLink>
                <NavLink 
                    to="/host/reviews"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}