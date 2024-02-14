export default async function UserPosts({posts}){
  
    const content = posts.map(post => {
        return(
            <article key = {post.id}>
                <h2>{post.title}</h2>
                <p>{post.title}</p>
            </article>
        )
    })
    return content
}