import React from "react"

export default function Header(){
    return(
        <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/vans">Vans</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    )
}