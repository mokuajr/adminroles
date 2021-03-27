import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/firebase';
import VipPost from './Layout/VipPost';
 

function VIP() {
     const [posts, setPosts ] = useState([]);
     
    useEffect( () => {
        db.collection('Viptips')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot =>
                setPosts(snapshot.docs.map( doc => doc.data())) )
    }, []);

    return (
        <div className=" vip ">
            
            {   
                posts.map( post => (   
 
                    <VipPost  
                        Home ={post.Home}
                        Vtips={post.Vtips}
                        Away ={post.Away}
                        VOdds={post.VOdds}
                        Vcountry={post.Vcountry}
                        Vtime ={post.Vtime}
        
                    /> 
                ))
            }
            <div className="logout">
                {/* <button onClick={ () => { auth.currentUser().signOut() } } >Log Out</button> */}
            </div>
        </div>
    )
}

export default VIP
