export default async function getUser(userId){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
     if(!res.ok){
        throw new Error("Failed to fetch the data")
     }
    return res.json()
}

