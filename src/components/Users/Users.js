import React from 'react';
import { db } from '../Firebase/firebase';
 
function Users({ username, email, userId }) {
    const deleteuser = () => {
        if (userId !== undefined) {
            
            db.collection("users").doc(userId).delete();
        } else if (userId === userId.uid) {
            db.collection("users").doc(userId).delete();
        }
    }
    
     return (
         <div className="users" >
             <h2>USERS </h2>
              
             <form>
                <div className="id" >
                     <h6>{userId}</h6>
                </div>
                <div className="username" >
                    <h4>{username}</h4>
                </div>
                 <div className="email" >  
                    <h4> {email}</h4>
                 </div>
                <button type={deleteuser} >Delete</button>
             </form>
         </div>
     )
 }
 
 export default Users
 