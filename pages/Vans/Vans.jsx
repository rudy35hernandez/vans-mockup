import React from "react"
import {Link, useSearchParams} from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")


    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    const vansEl = displayedVans.map(el => {
        return (
            <div key={el.id} className="van-tile">
                <Link to={`${el.id}`} 
                    state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
                >
                <img src={el.imageUrl} className="van-pic" alt="van picture" />
                <div className="name-price">
                    <h2>{el.name}</h2>
                    <h4>${el.price} <br></br>/day</h4>
                </div>
                <i className={`van-type ${el.type} selected`}>{el.type}</i>
                </Link>
            </div>
        )
    })

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button 
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >
                    Rugged
                </button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >
                    Luxury
                </button>
                <button 
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >
                    Simple
                </button>
                {
                typeFilter ?
                    (<button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters">
                        Clear
                    </button>) : 
                    null
                }
            </div>
            <div className="van-selections">
                {vansEl}
            </div>
        </div>
        
    )
}