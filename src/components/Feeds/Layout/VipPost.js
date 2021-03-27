import React from 'react';
import "./VipPost.css";

function VipPost({Away, Home, Vtips, VOdds, Vcountry , Vtime}) {
    return (
        <div className=" VipPost">
            <form >
                <div className="viphead">
                    <h5> {Vcountry }</h5>
                    <h5> {Vtime} </h5>
                </div>
                <div className="vipbody ">
                    <h4>{Home}</h4>
                    <h5>VS</h5>
                    <h4>{Away} </h4>
                </div>
                <div className="vip-foot">
                    <h4>{Vtips}</h4>
                    <h4>{VOdds} </h4>
                </div>
                
            </form>
            
        </div>
    )
}

export default VipPost
