export default async function getUserPosts(userId){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res.ok){
        throw new Error("failed to fetch")
    }

    return res.json()
}