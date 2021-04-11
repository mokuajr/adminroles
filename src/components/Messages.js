import React, { useEffect, useState } from 'react'
import { db } from './Firebase/firebase';
import './Messages.css';

function Messages() {
     const [msg, setMsg] = useState([]);
    useEffect(() => {
         db.collection('contacts')
             .orderBy('timestamp', 'desc')
             .onSnapshot(snapshot => {
      //evry time anew post is added, fire  this code 
      setMsg(snapshot.docs.map(doc => ({
        id: doc.id,
        text: doc.data()
      })))
     })
    },[])
    return (
        <div>
            {
                msg.map(({id, text}) => (
                <div className="messages" >
                    <div className="msgheader">
                        <h5>{ text.name} </h5>  
                        <h5> {text.country} </h5>    
                    </div>
                    <div className="msgbody">
                        <h6>{text.phone} </h6>
                        <h6>{text.email}</h6>
                        
                    </div>
                    <div className="msgfooter">
                        {/* <p>{text.timestamp}</p>   */}
                        <p>{text.message}</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default Messages
