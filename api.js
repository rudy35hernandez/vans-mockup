export async function GetVans(){
    const res = await fetch("/api/vans")
    const data = await res.json
    return data
}