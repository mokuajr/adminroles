import React, { useState } from 'react'
import { db, timestamp } from './Firebase/firebase';
import './styles.css';
import TextField from "@material-ui/core/TextField";


function Contacts() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); 
    const [country, setCountry] = useState(''); 
    const sendmessage = () => {
        db.collection("contacts").add({
            name: name,
            country: country,
            phone: phone,
            email: email,
            message: message,
            timestamp:timestamp
        })
        setEmail('');
        setCountry('');
        setName('');
        setPhone('');
        setMessage('');
    }

    return (
        <div className="contacts" >
            <div className="contact_us">

                <div className="mycontact">
                    <h5>
                        <h2>Contact Us  </h2><br/>
                        Call or text on WhatsApp or Telegram <br/>
                        phone: +254790301470 <br/>
                        Email: kevin001.mokua@yahoo.com <br/>

                    </h5>


                    <hr />
                </div>
                <form>
                    <div className="form" >
                        <div className="names">
                            <p>full names </p>
                            <input
                                type="text"
                                placeholder="kelvin klein"
                                value={name}
                                required="true"
                                onChange={event => setName(event.target.value)}
                        />
                        </div>
                        <div className="names">
                            <p>country </p>
                            <input
                                type="text"
                                placeholder="poland"
                                value={country}
                                required="true"
                                onChange={event => setCountry(event.target.value)}
                            />

                        </div>
                        <div className="names">

                            <p>email </p>
                            <input
                                type="email"
                                placeholder="kevin001.mokua@yahoo.com "
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="names"> 
                            <p>phone </p>
                            <input
                                input="number"
                                placeholder="254790301470"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="message">
                            <p>message </p>
                            <TextField
                                type="text"
                                multiline
                                width="100vh"
                                rows="5"
                                border="1px solid lightgrey"
                                fullWidth
                                placeholder="i want to pay through mpesa/Skrill/Paypal/bank"
                                value={message}
                                required="true"
                                onChange={event => setMessage(event.target.value)}
                            />
                        </div>
                        
                    </div>
                </form>
                <button onClick={sendmessage} >send </button>
            </div> 
        </div>
    )
}

export default Contacts
