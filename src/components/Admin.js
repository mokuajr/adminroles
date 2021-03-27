import React from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import * as ROLES from '../constants/roles';
import * as ROUTES from '../constants/routes';
import { withFirebase } from './Firebase';
import { withAuthorization } from './Session'; 

 
const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <div className ='admin' display='flex'padding='20px' margin-left="10px" >
       
      <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      <Link to={ROUTES.FREETIPS} >Freetips</Link>
      <Link to={ROUTES.NEWSBOX} >Create post</Link>
      <Link to={ROUTES.VIPTIPS} >Viptips</Link>
      <Link to={ROUTES.REG_USERS}>Users</Link>
      <Link to={ROUTES.CREATE_ADVERT}> adverts</Link>
    </div>
     
    <hr />
     
      
    
  </div>
); 
  
const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
 
export default compose (
  withAuthorization (condition),
  withFirebase,
)(AdminPage);