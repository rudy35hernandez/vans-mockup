import React from "react"
import {useParams} from "react-router-dom"

export default function HostVanDetail(){

    const params = useParams()
    const [currentVan, setCurrentVan] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    return (
        <>

        </>
    )
}