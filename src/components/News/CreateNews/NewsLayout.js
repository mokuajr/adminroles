import React, {useState} from 'react';
import "./NewsLayout.css";

function NewsLayout({ postId, timestamp,  desc,  tittle,  imageUrl, }) {
    const [show, setShow] = useState(false);
    
    return (
        <div className="newslayout" >

            <div className="body">
                <div className="headsnews">
                    <h5 className="timestamp">{ new Date(timestamp?.toDate()).toUTCString()}</h5>
                    <h3 className="tittle">{tittle}</h3>
                </div>
                <div className="bodynews">
                    <img className="image" src={imageUrl} alt="" />
                    <p className="desc">{show ? { desc } : null}
                      <button onClick={()=>setShow(!show)} >Learn more</button>
                    </p>
                </div>
            </div>

        </div>
        //footer needed
    )
}

export default NewsLayout
