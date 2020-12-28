import React  from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Account from './components/Account';
import Admin from './components/Admin';
import PasswordForget from './components/PasswordForget'
import { withAuthentication } from './components/Session';
 
const App = () => (
 
        <Router>
           
          <Navigation  />
          <hr />

          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.SIGN_IN} component={SignIn} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <Route path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.ACCOUNT} component={Account} />
          <Route path={ROUTES.ADMIN} component={Admin} />
        </Router>

 
);
     
export default withAuthentication(App);