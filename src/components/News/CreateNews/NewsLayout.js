import React from 'react';
import "./NewsLayout.css";

function NewsLayout({ postId, timestamp,  desc,  tittle,  imageUrl, }) {
    
    
    return (
        <div className="newslayout" >
            <h3 className="timestamp">{ new Date(timestamp?.toDate()).toUTCString()}</h3>
            <h2 className="tittle">{tittle}</h2>
            <img className="image" src={imageUrl} alt="" />
            <p className="desc">{desc}</p>

        </div>
        //footer needed
    )
}

export default NewsLayout
