import React from "react"

export default function Vans(){
    const [vansData, setVansData] = React.useState([])

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => setVansData(data.vans))
            .catch(res => handleError(res))
    }, [])

    const vansEl = vansData.map(el => {
        return (
            <div className="van-info">
                <img src={el.imageUrl} className="van-pic" alt="van picture" />
                <div className="name-price">
                    <h2>{el.name}</h2>
                    <h4>${el.price} <br></br> /day</h4>
                </div>
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