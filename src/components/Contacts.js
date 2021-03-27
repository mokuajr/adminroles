import React, { useState } from 'react'
import { db, timestamp } from './Firebase/firebase';

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
                    <div className="country">
                        <p>country </p>
                        <input
                            type="text"
                            placeholder="poland"
                            value={country}
                            required="true"
                            onChange={event => setCountry(event.target.value)}
                        />

                    </div>
                    <div className="email">

                        <p>email </p>
                        <input
                            type="email"
                            placeholder="kelvincarlx@gmail.com"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="phone"> 
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
                        <input
                            type="text"
                            placeholder="i want to pay through Skrill/Paypal"
                            value={message}
                            required="true"
                            onChange={event => setMessage(event.target.value)}
                        />
                    </div>
                    
                </div>
            </form>
            <button onClick={sendmessage} >send </button>
        </div>
    )
}

export default Contacts
