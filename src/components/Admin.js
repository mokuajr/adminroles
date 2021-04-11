import React, { useState } from 'react';
import { compose } from 'recompose';
import { Link } from 'react-router-dom';
import * as ROLES from '../constants/roles';
import * as ROUTES from '../constants/routes';
import { withFirebase } from './Firebase';
import { withAuthorization } from './Session'; 
import './Navigation.css';
import { FaAlignRight } from 'react-icons/fa';
 


 
const AdminPage = () => {
   const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header"> 
      <div className="logo-nav"> 
        <div className={click ? "nav-options active" : "nav-options"}  > 
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.SIGN_UP}>Sign Up</Link>
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.FREETIPS} >Freetips</Link>
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.NEWSBOX} >Create post</Link>
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.VIPTIPS} >Viptips</Link>
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.MESSAGES} >Messages </Link>
          <Link className="option" onClick={closeMobileMenu}
            to={ROUTES.CREATE_ADVERT}> adverts</Link> 
        </div> 
        <hr />
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <FaAlignRight backrground-color="transparent" className="menu-icon" />
          ) : (
            <FaAlignRight backrground-color="transparent" className="menu-icon" />
          )}
        </div> 
      </div>
    </div>
  );
};
  
const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
 
export default compose (
  withAuthorization (condition),
  withFirebase,
)(AdminPage);