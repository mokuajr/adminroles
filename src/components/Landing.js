import React from 'react';
import Adverts from './Adverts/Adverts';
import Freegames from './Feeds/Freegames'; 
import './styles.css';        

function Landing() {
    return (
         
        <div className="free">
            
            <div className="freetip" > 
                <h2> free tips</h2>
                <Freegames  />
            </div>
            <div classNAme="adverts" >
                <h2>Updates</h2>
                <Adverts /> 
            </div> 
            
            
        </div>
    )
}

export default Landing
 
