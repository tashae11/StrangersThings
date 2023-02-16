import { useEffect,useState } from "react"

export default function Posts(){
    //return <div>broken!</div>
    const [posts, setPosts]= useState([])

    useEffect(()=>{
        async function getPosts(){
            try{
                const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-ct-web-pt/posts')

                let results = await response.json()
                /*console.log (results)*/
                setPosts(results.data.posts)

            }catch(err){
                /*console.log(err)*/
            }

            
        }
        getPosts()

    },[])

    return(
        posts.map(post=>{
            return(
                <div key={post._id} className="card">
                    <div>{post.title}</div>
                    <div>{post.description}</div>
                    <div>{post.price}</div>

                </div>
            )
        })
    )
}