import React, { useState } from 'react';
import './Gametipsform.css';
import  { db, timestamp } from '../Firebase/firebase';
import Freegames from '../Feeds/Freegames';
 
function Gametipsform() {

    
    const [country, setCountry ] = useState('');
    const [tips, setTips] = useState('');
    const [time, setTime] = useState('');
    const [results, setResults] = useState('');
    const [hometeam, setHomeTeam] = useState('');
    const [awayteam, setAwayTeam] = useState('');
    const [homelogo, setHomeLogo] = useState('');
    const [awaylogo, setAwayLogo] = useState('');
    const [odds, setOdds] = useState('');
 
    const sendPost = () => {

                        
        db.collection("freetips").add({
            timestamp: timestamp,
            country: country,
            odds: odds,
            results: results,
            homelogo: homelogo,
            hometeam: hometeam,
            time: time,
            tips: tips,
            awaylogo: awaylogo,
            awayteam: awayteam,
            
        })
        
        setCountry("");
        setOdds("");
        setResults("");
        setHomeLogo("");
        setHomeTeam("");
        setTime("");
        setTips("");
        setAwayLogo("");
        setAwayTeam("");
     }
  
    
    return (
        <div className="tipsform">
            <center>
                <div className="headertips">
                    
                    <div className="country">
                        <input 
                            value={country}
                            placeholder="country of game"
                            onChange={event => setCountry(event.target.value)}
                            type="text"
                        />
                    </div>
                    <div  className="Odds">
                        <input
                            value={odds}
                            onChange={event => setOdds(event.target.value)}
                            placeholder="Odds"
                            type="text"
                        />
                    </div>
                    <div  className="results">
                        <input
                            value={results}
                            placeholder="Result"
                            onChange={event => setResults(event.target.value)}
                            type="text"
                        />
                    </div>
                </div>
                <form className="teams_tips">
                    <div className="hometeam">
                         <input
                            type="text"
                            value={homelogo}
                            onChange={event => setHomeLogo(event.target.value)}
                            placeholder="home logo url"
                        />
                        <input
                            className="team1"
                            value={hometeam}
                            onChange={event => setHomeTeam(event.target.value)}
                            placeholder="home team"
                            type="text"
                        />
                    </div>
                    <div className="timeandtip">
                        <input
                            type="text"
                            value={time}
                            onChange={event => setTime(event.target.value)}
                            placeholder="time"
                            
                        /> 
                        <input
                            value={tips}
                            placeholder="tips"
                            onChange={event => setTips(event.target.value)}

                            type="text"
                            
                        /> 
                    </div>
                    <div className="awayteam">
                        <input
                            value={awaylogo}
                            type="text"
                            onChange={event => setAwayLogo(event.target.value)}
                            placeholder="away logo url"
                        />
                        <input
                            className="team2"
                            value={awayteam}
                            onChange={event => setAwayTeam(event.target.value)}
                            placeholder="awayteam"
                            type="text"
                        />
                    </div>
                </form>
                    <div> 
                    
                        <button
                            onClick = {sendPost}
                            className="post_button">
                            Post tips
                        </button>
                    </div>
            </center>

            <Freegames />
        </div>
    )
}

export default Gametipsform
