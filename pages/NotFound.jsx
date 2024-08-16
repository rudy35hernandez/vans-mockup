import React from "react"
import {Link} from "react-router-dom"

export default function NotFound(){
    return (
        <>
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link>Return to home</Link>
        </>
    )
}