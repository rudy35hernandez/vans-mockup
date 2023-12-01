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
            <div key={el.id} className="van-info">
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
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-selections">
                {vansEl}
            </div>
        </div>
        
    )
}