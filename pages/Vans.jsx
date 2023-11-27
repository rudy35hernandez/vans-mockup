import React from "react"

export default function Vans(){
    const [vansData, setVansData] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVansData(data.vans))
    }, [])

    const vansEl = vansData.map(el => {
        return (
            <div>
                <img src={el.imageUrl} alt="van picture" />
                <h2>{el.name}</h2>
                <h4>{el.price}</h4>
                <h3>{el.type}</h3>
            </div>
        )
    })

    return (
        <div>
            <h1>Explore our van options </h1>
            <div>
                {vansEl}
            </div>
        </div>
        
    )
}