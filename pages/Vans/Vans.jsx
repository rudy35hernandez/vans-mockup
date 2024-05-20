import React from "react"
import {Link, useSearchParams} from "react-router-dom"

export default function Vans(){
    const [vans, setVans] = React.useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans

    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vansEl = displayedVans.map(el => {
        return (
            <div key={el.id} className="van-tile">
                <Link to={`/vans/${el.id}`}>
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

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <Link to="?type=rugged" className="van-type rugged">
                    Rugged
                </Link>
                <Link to="?type=luxury" className="van-type luxury">
                    Luxury
                </Link>
                <Link to="?type=simple" className="van-type simple">
                    Simple
                </Link>
                <Link to="." className="van-type clear-filter">
                    Clear
                </Link>
            </div>
            <div className="van-selections">
                {vansEl}
            </div>
        </div>
        
    )
}