import React  from 'react';
import "./App.css"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import Landing from './components/Landing';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Account from './components/Account';
import Admin from './components/Admin';
import PasswordForget from './components/PasswordForget'
import { withAuthentication } from './components/Session';
import AddVIPtips from './components/Addtips/AddVIPtips';
import Gametipsform from './components/Addtips/Gametipsform';
import NewsBox from './components/News/CreateNews/NewsBox';
import NewsPost from './components/News/NewsPost';
import JoinVip from './components/JoinVip';
import Contacts from './components/Contacts';
import Messages from './components/Messages';
import CreateAdvert from './components/Adverts/CreateAdvert'; 
import Navigation from './components/Navigation';
 
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
    <Route path={ROUTES.VIPTIPS } component= {AddVIPtips} />
    <Route path={ROUTES.FREETIPS } component= {Gametipsform} />
    <Route path={ROUTES.NEWSBOX } component= {NewsBox} />
    <Route path={ROUTES.SPORTS } component= {NewsPost} />
    <Route path={ROUTES.VIP} component= {JoinVip} />
    <Route path={ROUTES.CONTACT_US } component= {Contacts} />
    <Route path={ROUTES.CREATE_ADVERT } component= {CreateAdvert} />
      <Route path={ROUTES.MESSAGES } component= {Messages} />
  </Router>
  

 
);
     
export default withAuthentication(App);