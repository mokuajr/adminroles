import React, { useState } from 'react';
import * as ROUTES from '../constants/routes';
import { AuthUserContext } from './Session';
import "./Navigation.css";
import { FaAlignRight } from 'react-icons/fa';
import {NavLink } from 'react-router-dom';

 
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
 
const NavigationAuth = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        {/* <div className="logo-container">
          <h3>Sports-Lay</h3>  
        </div> */}
        <div className={click ? "nav-options active" : "nav-options"}> 
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.LANDING}>Home</NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.SPORTS}>Sports</NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.HOME}> VIP </NavLink>
          <NavLink className="option mobile-option" onClick={closeMobileMenu}
            to={ROUTES.ACCOUNT}>Account</NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.ADMIN}>Admin </NavLink>
          
        </div>
      </div>
       
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaAlignRight backrground-color="transparent" className="menu-icon" />
        ) : (
          <FaAlignRight backrground-color="transparent" className="menu-icon" />
        )}
      </div>
    </div>
  );
} 

const NavigationNonAuth = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        {/* <div className="logo-container">
          <h3>Sports-Lay</h3>  
        </div> */}
        <div className={click ? "nav-options active" : "nav-options"}> 
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.LANDING}>Home</NavLink>
          <NavLink className="option mobile-option" onClick={closeMobileMenu}
            to={ROUTES.SIGN_IN}>Login</NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.SPORTS}>Sports</NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.VIP}> VIP </NavLink>
          <NavLink className="option" onClick={closeMobileMenu}
            to={ROUTES.CONTACT_US}> Contact Us </NavLink>
        </div>
      </div>
       
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FaAlignRight backrground-color="transparent" className="menu-icon" />
        ) : (
          <FaAlignRight backrground-color="transparent" className="menu-icon" />
        )}
      </div>
    </div>
  );
}
 
export default Navigation;