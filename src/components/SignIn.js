import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from './SignUp';
import { withFirebase } from './Firebase/';
import * as ROUTES from '../constants/routes';
import { PasswordForgetLink } from './PasswordForget';
import './styles.css';
const SignInPage = () => (
  <div className="signin">
    <h1>SignIn</h1>
    <SignInForm />
    {/* <SignInGoogle /> */}
    <PasswordForgetLink />
    {/* <SignUpLink /> */}
  </div>
);  
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <div className="signin">
        <div className="sighead">
          <p>
            To Sign in for VIP you need to be subscribed<br />
            for more information about our vip subscription plans<br/>
            visit <Link to={ROUTES.VIP} >VIP</Link>
          </p>
        </div>
        <form onSubmit={this.onSubmit}>
          
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
           
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
  
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
} 

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
// const SignInGoogle = compose(
//   withRouter,
//   withFirebase,
// )(SignInGoogleBase);

 
export default SignInPage;
 
export {
  // SignInGoogle,
  SignInForm
};