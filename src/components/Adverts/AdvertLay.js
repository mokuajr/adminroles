import React from 'react';
 
function AdvertLay({ advertId, idx, desc, tittle, imageUrl, }) {
    
    return (
        <div className="newslayout" >
             <h2 className="tittle">{tittle}</h2>
            <img className="image" src={imageUrl} alt="" />
            <p className="desc">{desc}</p>
        </div>
    )
}

export default AdvertLay
