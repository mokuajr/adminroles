import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import './JoinVip.css';

function JoinVip() {
    return (
        <div className="joinvip" >
            <div className= "head">
             <h2> HOW TO JOIN VIP </h2>
             <p>To join our VIP you need to subscribe. 
                 At the moment we have three subscription plans. 
                 The weekly subscription, the monthly subscription 
                 and the three months plans. 
                 If you want to test the accuracy of our games
                kindly refer to our free tips section in the homepage.
            </p>
                <p> Make payments VIA <h2> Skrill or PayPal   </h2>address is
                    <h2>kevin001.mokua@yahoo.com</h2> </p>
             
                <hr />
                
            </div> 
             
            <h2>HOW TO MAKE PAYMENTS</h2>
            <div className="mpesa">
            <h2> PAY WITH MPESA</h2>
                <p>
                    1. Go to MPESA <br />
                    2. Send Money <br />
                    3. Enter phone Number (0790301470)<br />
                    4. enter amount ksh (1 week @ 1000 or 1 month @2000)<br />
                    5. then Mpesa Pin <br />
                    send us confirmation message to get login details
                    whatsApp/Telegram/Text on 0790301470 or
                    Email: <h3>kevinmokuajr@gmail.com
                    </h3> <Link to={ROUTES.CONTACT_US} >Contact</Link> 

                </p>
                <hr />
            </div>
            <div className="tanzania">
                <h2>HOW TO PAY WITH MPESA FROM TANZANIA</h2>
                <p> 1.Dial *150*00# on your Vodacom line <br />
                    2.Select “Send money to MPESA Kenya”<br />
                    3.Enter NUMBER (+254 790 301 470)<br />
                    4.Enter AMOUNT (TSh25,500) for one week subscription<br />
                    or (TSh51,000) for one month subscription<br />
                    5.Enter PIN <br />
                    6.Press 1 to confirm.<br />
                    send us confirmation message to get login details
                    whatsApp/Telegram/Text on 0790 301 470 or
                    Email: <h3>kevinmokuajr@gmail.com
                    </h3> <Link to={ROUTES.CONTACT_US} >Contact</Link> 
                </p>
                <hr />
            </div>
            <div className="rwanda" >
            <h2> HOW TO PAY WITH MPESA RWANDA</h2>
                <p>
                    1.Dial *830# to send money to Kenya from your MTN line.<br/>
                    2.Follow the prompts to completes the transaction.<br/>

                    3.Subscription plan is 10,500 Rwandan Franc<br/>
                    for one week or 21,000 Rwandan Franc for one month.<br/>

                    Payments to be sent to this number(+254 790 301 470)<br />
                    send us confirmation message to get login details
                    whatsApp/Telegram/Text on 0790 301 470 or
                    Email: <h3>kevinmokuajr@gmail.com
                    </h3> <Link to={ROUTES.CONTACT_US} >Contact</Link> 
                </p>
                <hr />
            </div>
            <div className="uganda" >
                <h2>HOW TO PAY WITH MPESA UGANDA </h2> 
                <p>   
                1.Dial *165# to send money to Kenya from your MTN line.<br/>
                2.Follow the prompts to completes the transaction.<br/>

                3.Subscription plan is 40,000 Ugandan Shillings for one week<br/>
                or 80,000 Ugandan Shillings for one month.<br/>
                Payments to be sent to this number(+254 790 301 470)<br/>
                send us confirmation message to get login details
                whatsApp/Telegram/Text on 0790 301 470 or
                Email: <h3>kevinmokuajr@gmail.com
                </h3> <Link to={ROUTES.CONTACT_US} >Contact</Link> 
               </p>
            </div>
        </div>
    )
}

export default JoinVip
