import React from "react"
import {useOutletContext} from "react-router-dom"

export default function HostVanInfo(){

    const [currentVan, setCurrentVan] = useOutletContext()

    console.log(currentVan)
    
    return(
        <>
            <h1>{currentVan.name}</h1>
            <h2>{currentVan.type}</h2>
            <p>{currentVan.description}</p>
        </>
    )
}