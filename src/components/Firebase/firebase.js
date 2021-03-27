import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
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
 
 const firebaseApp  = app.initializeApp(config);
//  const auth = firebase.auth();
  const storage = firebase.storage();
const db = firebaseApp.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();
 
  export { db, timestamp, storage};
class Firebase {
   constructor() {
   // app.initializeApp(config);

    /* Helper */

    this.fieldValue = app.firestore.FieldValue;
    this.emailAuthProvider = app.auth.EmailAuthProvider;

    /* Firebase APIs */

    this.auth = app.auth();
    this.db = app.firestore();
    
    /* Social Sign In Method Provider */

    this.googleProvider = new app.auth.GoogleAuthProvider();
    //this.facebookProvider = new app.auth.FacebookAuthProvider();
   // this.twitterProvider = new app.auth.TwitterAuthProvider();
  }


   
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  // doSignInWithGoogle = () =>
  //   this.auth.signInWithPopup(this.googleProvider);

  // doSignInWithFacebook = () =>
  //   this.auth.signInWithPopup(this.facebookProvider);

  // doSignInWithTwitter = () =>
  //   this.auth.signInWithPopup(this.twitterProvider);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doSendEmailVerification = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
    });

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // default empty roles
            if (!dbUser.roles) {
              dbUser.roles = {};
            }

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser,
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });
  
    // *** User API ***

  user = uid => this.db.doc(`users/${uid}`);

  users = () => this.db.collection('users');
   // user = uid =>  db.ref(`users/${uid}`);
  //users = () =>  db.ref('users');

  // *** Message API ***

 // message = uid => this.db.doc(`messages/${uid}`);

  //messages = () => this.db.collection('messages');
  //*** Viptips API*/
  Viptips = uid => this.db.doc(`Viptips/${uid}`);

  Viptips = () => this.db.collection('Viptips');

  //*** freetips API*/
  freetips = uid => this.db.doc(`freetips/${uid}`);

  freetips = () => this.db.collection('freetips');
  

   

}

//   var  viewers_ip;
//   function get_viewers_ip (json){
//   viewers_ip = json.ip;
//   count_view(viewers_ip);
//  }
// function count_view(viewers_ip) {
//     var views;
//     var ip_to_string = viewers_ip.toString();
//     for (var i, i = 0; i < ip_to_string.lenth; i++){
//       ip_to_string = ip_to_string.replace(".", "-");

//   }
//   firebase.database().ref().child("page_views/" + ip_to_string).set({
//      viewers_ip:viewers_ip
//   })
//   //substitute the data 
//   // db.collection("ip_webviews").doc("page_views/" + ip_to_string).add({
//   //   viewers_ip: viewers_ip,

//   // })
//   firebase.database().ref().child("page_views").on("value", function (snapshot) {
//     views = snapshot.numChildren();
//     Document.getElementById("view_count_text").innerHTML = "";
//   })
//}
{/* <script type="application/javascript">
  <script type="application/javascript " src="https://api.ipify.org?format=jsonp&callback=get_viewers_ip"></script>  
</script> */}


export default Firebase;
