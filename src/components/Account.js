import React from 'react';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm  from './PasswordChange';
import {AuthUserContext, withAuthorization } from './Session'
import SignOutButton from './SignOut';

const AccountPage = () => (
 <AuthUserContext.Consumer>
    {authUser => (
      <div>
        
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <SignOutButton  size="30px"/>
      </div>
    )}
    
  </AuthUserContext.Consumer>
);

 
const condition = authUser => !!authUser;
 
export default withAuthorization  (condition)(AccountPage);
 
 