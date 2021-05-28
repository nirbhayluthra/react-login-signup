import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDBzrMwCM2fb58-zip1U8WLC6ussbHR3-8",
    authDomain: "react-login-signup-30ee3.firebaseapp.com",
    projectId: "react-login-signup-30ee3",
    storageBucket: "react-login-signup-30ee3.appspot.com",
    messagingSenderId: "836631374512",
    appId: "1:836631374512:web:d675ed57ba0c9b795d2975",
    measurementId: "G-761ZN574HL"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;