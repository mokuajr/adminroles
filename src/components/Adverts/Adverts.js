import React, { useEffect, useRef, useState } from 'react';
import { db } from '../Firebase/firebase';
import AdvertLay from './AdvertLay';
const delay = 2500;
function Adverts() {
    const [advert, setAdvert] = useState([])
    const [index, setIndex] = useState(0);
    const timeoutRef =  useRef(null);

    function resetTimeout() {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === advert.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);
     useEffect(() => {
         db.collection('adverts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      //evry time anew post is added, fire  this code 
      setAdvert(snapshot.docs.map((doc, index) => ({
        id: doc.id,
        index: index,
        advrt: doc.data()
      })))
     })
    },[])
    return (
        <div className="slideshow" >
            
       <div
         className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
       >
        {advert.map((advrt, id, index) => (
            <AdvertLay
                key={index}  
                tittle={advrt.tittle}
                desc={advrt.desc}
                imageUrl={advrt.imageUrl} 
            />
        ))}
            </div  >
            <div className="slideshowDots">
                {
                    advert.map(({_, idx}) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                        setIndex(idx);
                        }}
                    > </div>
                    ))
                }
            </div>
        </div> 
        
    )
}

export default Adverts
