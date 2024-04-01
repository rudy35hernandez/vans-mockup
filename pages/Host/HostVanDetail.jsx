import React from "react"
import {useParams} from "react-router-dom"

export default function HostVanDetail(){

    const params = useParams()
    const [van, vanDetails] = React.useState([])

    return (
        <h1>
            This is one of the vans!
        </h1>
    )
}