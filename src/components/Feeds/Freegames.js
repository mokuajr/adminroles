import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import Post from './Layout/Post';
  

function Freegames() {
    // // eslint-disable-next-line 
    const [posts, setPosts] = useState([]);
    // eslint-disable-next-line 
    useEffect(() => {
        db.collection('freetips')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map( doc => doc.data())) )
    }, []);
    
    return (  
        <div className="freegames" >
            {   
                posts.map( post => (
 
                    <Post  
                         timestamp={post.timestamp}
                            country={post.country}
                            odds= {post.odds}
                            results = {post.results}
                            homelogo= {post.homelogo}
                            hometeam={ post.hometeam}
                            time= {post.time}
                            tips= {post.tips}
                            awaylogo= {post.awaylogo}
                            awayteam= {post.awayteam}
                            imageUrl={post.imageUrl}
                    /> 
                ))
            }
         {/*posts */}
        </div>   
    )
}

export default Freegames
