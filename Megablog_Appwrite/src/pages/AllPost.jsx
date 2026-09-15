import React, { useEffect, useState } from 'react'
import { Container,PostCard } from '../components'
import service from '../Appwrite/config'


function AllPost() {
    const [posts,setPosts] = useState([])
    useEffect(()=>{},[])
    service.getPosts([].then((post)=>{
        if (posts) {
            setPosts(posts.documents)
        }
    }))
    return (
        <div className=' w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-1 w-1/4'>
                            <PostCard post ={post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost