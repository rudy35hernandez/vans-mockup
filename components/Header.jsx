import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <Link to="/host">Host</Link>
            <Link to="/vans">Vans</Link>
            <Link to="/about">About</Link>
        </nav>
      </header>
    )
}