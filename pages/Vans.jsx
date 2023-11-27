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
                <h2>{el.name}</h2>
                <img src={el.imageUrl} alt="van picture" />
            </div>
        )
    })

    return (
        <div>
            <h1>Vans go here</h1>
            <div>
                {vansEl}
            </div>
        </div>
        
    )
}