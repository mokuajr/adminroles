import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/firebase';
import NewsLayout from './CreateNews/NewsLayout';

function NewsPost() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
         db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //evry time anew post is added, fire  this code 
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })))
     })
    },[])
    return (
        <div   >
            {
                posts.map(({id, post}) => (
                <NewsLayout 
                    key={id}  
                    postId ={id}
                    timestamp = {post.timestamp}
                    tittle={post.tittle}
                    desc={post.desc}
                    imageUrl={post.imageUrl}
                    
                />
                ))
            }
        </div>
    )
}

export default NewsPost
