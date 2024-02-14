import getAllUsers from "@/lib/getAllUser"
import Link from "next/link"

export const metadata = {
    title: 'users'
}
  
export default async function UserPage(){
    const userdata = getAllUsers()
    const users = await userdata
    const content = (
        <section>
            <h2>
             <Link href = "/">Back to home</Link>
            </h2>
            <br/>
        {users.map(user => (
            <>
             <p key = {user.id}>
             <Link href={`/users/${user.id}`}>{user.name}</Link>
             </p> 
             <br/>
            </>
        ))}
        </section>
    )
    return content
}