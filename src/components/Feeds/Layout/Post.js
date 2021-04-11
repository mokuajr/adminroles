import React from 'react'
import './Post.css'
 

function Post({ country, timestamp, odds, results, homelogo, hometeam, time, tips, awaylogo, awayteam, imageUrl }) {
    
    return (
        <div className= "post">
            <div>
                <div className="freetip" >
                    <div className="timestamp">
                        <p> { new Date(timestamp?.toDate()).toUTCString()  } </p>
                    </div>
                    <div className ="countrytips">
                       <h4> {country} </h4>
                       
                        <h4> {results} </h4>
                    </div>
                    <div className="tips_form ">

                    <div className="home_team">
                        <img
                            className="tips_image"
                            src= {homelogo}
                            alt=""
                            />
                            <h4> {hometeam} </h4>
                        </div>
                    <div className="time_tips"> 
                         <h3> {time} </h3>   
                    </div>
                    <div className="away_team">
                        <img
                            className="tips_image"
                            src={awaylogo}
                            alt=""
                         />
                        <h4>{awayteam} </h4>
                    </div>
                    </div>
                    <div className="footfree" >
                        <h3 > {tips} @ {odds} </h3>
                    </div>

                    <img
                        className="post_image"
                        src={imageUrl}
                        alt=''
                    />
                </div>
            </div>
                    
        </div>
    )
}

export default Post
