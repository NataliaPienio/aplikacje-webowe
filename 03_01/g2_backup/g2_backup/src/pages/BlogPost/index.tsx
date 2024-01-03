import {useParams} from "react-router-dom"
import {Post} from "../../types";
import {useEffect, useState} from "react";

function BlogPost(){
    const {id} = useParams<{id?: string}>() || {}

    const [post, setPost] = useState<Post | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    useEffect(()=> {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then((post: Post) =>{
                setPost(post)
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div></div>
    )
}

export default BlogPost