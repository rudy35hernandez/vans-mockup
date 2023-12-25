import React from "react"
import {useParams} from "react-router-dom"


export default function VanDetail(){

    const params = useParams()
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setData(data.vans))
    }, [params.id])

    return (
        <div>
            <h1>Van details go here</h1>
            <img src={data.imageUrl} alt="picture of van" />
        </div>

    )
}