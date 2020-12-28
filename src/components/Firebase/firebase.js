import app from 'firebase/app';
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCre5_I96V1mViYtMXUIspvw05LZp38Hv4",
  authDomain: "admin-user-roles.firebaseapp.com",
  projectId: "admin-user-roles",
  storageBucket: "admin-user-roles.appspot.com",
  messagingSenderId: "251124982342",
  appId: "1:251124982342:web:39e46f98a6b502baf7a047",
  measurementId: "G-DK3YKN5L4J"
};
 
const fdb = app.firestore();

class Firebase {
  constructor() {
      app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
     
    }
    
  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .once('value')
          .then(snapshot => {
            const dbUser = snapshot.val();
 
            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }
 
            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            };
 
            next(authUser);
          });
      } else {
        fallback();
      }
    });
 
  
    // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
   
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}

export { fdb };
export default Firebase;