import React, { useState } from 'react';
import VIP from '../Feeds/VIP';
import { db, timestamp }  from '../Firebase/firebase';
import "./AddVIPtips.css";
 
function AddVIPtips() { 
    const [Away, setAway] = useState('');
    const [ Vcountry, setVcountry   ] = useState('');
    const [  Home, setHome ] = useState('');
    const [ Vtips, setVtips  ] = useState('');
    const [ Vtime, setVtime  ] = useState('');
    const [VOdds, setVOdss] = useState('');

    
    const handleAdd =() => {
            
        db.collection('Viptips').add({
            timestamp:  timestamp,
            Home: Home,
            Vcountry: Vcountry,
            VOdds: VOdds,
            Away: Away,
            Vtime: Vtime,
            Vtips: Vtips, 

        }) 
        setAway('');
        setHome('');
        setVcountry('');
        setVtime('');
        setVtips('');
        setVOdss('');
        

    }
 
    return (
        <div className="tips">

            <div className="addviptips">
                <div className="addhead">
                    <input type="text"
                        value={Vcountry}
                        onChange={event => setVcountry(event.target.value)}
                        placeholder="country" />
                    <input type="text"
                        value={Vtime}
                        onChange={event => setVtime(event.target.value)}
                        placeholder="time" />
                </div>
                <div className="addbody">
                    <input type="text"
                        value={Home}
                        onChange={event => setHome(event.target.value)}
                        
                        placeholder="home" />
                    <input type="text"
                        value={Away}
                        onChange={event => setAway(event.target.value)}
                        placeholder="Away" />
                </div>
                <div className="addfoot">
                    <input type="text"
                        value={Vtips}
                        onChange={event => setVtips(event.target.value)}
                        placeholder="tips" />
                    <input type="text"
                        value={VOdds}
                        onChange={event => setVOdss(event.target.value)}
                        placeholder="Odds" />
                </div>
                <div className="button">
                    <button
                        onClick={handleAdd}
                    > Add tips</button>
                
                </div>
            </div> 
            <div className="vip">
                <VIP />
            </div>
            
        </div>
    )
}

export default AddVIPtips
