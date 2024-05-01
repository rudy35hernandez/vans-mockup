import React from "react"
import {useOutletContext} from "react-router-dom"

export default function HostVanPricing(){

    const {currentVan, setCurrentVan} = useOutletContext()

    return(
        <h2>
            {currentVan.price}
        </h2>
    )
}