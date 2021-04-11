import React,{useState} from 'react';
import './Adverts.css';

function AdvertLay({timestamp, idx, desc, tittle, imageUrl, }) {
    const [show, setShow] = useState(false);
    return (
        <div className="advertpost" >
            <div className="adverts">
                <p>{ new Date(timestamp?.toDate()).toUTCString()}</p>
                <h2 className="tittle">{tittle}</h2>
                <div className="advertsimage">
                    <img className="image" src={imageUrl} alt="" />
                </div>
                <p className="desc">{show ? { desc } : null}
                      <button onClick={()=>setShow(!show)} >Learn more</button>
                </p>
            </div>
   
        </div>
    )
}

export default AdvertLay
