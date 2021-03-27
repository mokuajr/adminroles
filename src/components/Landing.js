import React from 'react';
import Adverts from './Adverts/Adverts';
import Freegames from './Feeds/Freegames'; 
 

function Landing() {
    return (
        <div className="free">
            <div > 
                <Adverts />
            </div> 
            <h2> free tips</h2>
            <div > 
                <Freegames  />
            </div>
            
            
        </div>
    )
}

export default Landing
 
