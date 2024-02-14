
import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react";
import UserPosts from "./component/UserPosts";

    export default async function UserPage({params : {userId}}){
        const userData = getUser(userId);
        const userPostsData = getUserPosts(userId)
       
         const [user , userPosts] = await Promise.all([userData , userPostsData])
        
        return(
            <>
                <h2>{user.name}</h2>
                <br/>
                <Suspense fallback = {<h2>Loading...</h2>}>
                 <UserPosts posts = {userPosts} />
                </Suspense>
            </>
        )
    }