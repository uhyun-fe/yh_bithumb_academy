import firebase from 'firebase';

var config = {
    apiKey: "0",
    authDomain: "snom",
    projectId: "sn07",
    storageBucket: "s.com",
    messagingSenderId: "61",
    appId: "1:asfadsf",
    measurementId: "G-90"
  };

firebase.initializeApp(config);
const firestore = firebase.firestore();

export default firestore;






