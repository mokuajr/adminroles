import React, {  useEffect, useState } from 'react'; 
import { db } from '../Firebase/firebase';
import Users from './Users';
 
function UserLay() {
  const [users, setUsers] = useState([]);
  
    useEffect(() => {
         db.collection('users').onSnapshot(snapshot => {
      //evry time anew post is added, fire  this code 
      setUsers(snapshot.docs.map(doc => ({
        id: doc.id,
        user: doc.data()
      })))
     })
    },[])

      return (
        <div>
           {
              users.map(({id, user}) => (
              <Users
                  key={id}  
                  UserId ={id}
                  username={user.username}
                  email ={user.email}
              />
              ))
            } 
        </div>
      );
 }
 export default UserLay
  
