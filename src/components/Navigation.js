import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
 import SignOutButton from './SignOut';
import * as ROLES from '../constants/roles';
import { AuthUserContext } from './Session';
import "./Navigation.css"
 
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ?
          (<NavigationAuth authUser={authUser} />)
          : ( <NavigationNonAuth /> )
           
      }
    </AuthUserContext.Consumer>  </div>
);
 
const NavigationAuth = () => (
  <div className="nav" >
    <div className="logotext">
      <h2 className="sportslay"> SportsLay</h2> 
    </div>
    <div className="navigation">
      <ul  className="navigation">
        <li className="spacelist" >
          <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li className="spacelist">
           <Link to={ROUTES.SPORTS}>Sports news</Link>
        </li>
        <li className="spacelist">
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="spacelist">
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
          <li className="spacelist">
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
        
        
        <li  className="spacelist" >
          <SignOutButton />
        </li>
      </ul>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <ul className="navigation">
    <li className="spacelist">
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li className="spacelist">
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li className="spacelist">
      <Link to={ROUTES.SPORTS}>Sports news</Link>
    </li>
    <li className="spacelist">
      <Link to={ROUTES.VIP}> VIP </Link>
    </li>
    <li className="spacelist">
      <Link to={ROUTES.CONTACT_US}> Contacts </Link>
    </li>
  </ul>
);
 
export default Navigation;