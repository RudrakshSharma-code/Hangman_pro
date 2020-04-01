/* ------------------------------------------------- */
/* ----------------Firebase API -------------------- */
/* ------------------------------------------------- */
  var firebaseConfig = {
    apiKey: "AIzaSyAm2thwFg9x41Zaiu2yTr-lYtgq3nleD7k",
    authDomain: "hangman-pro-aefa1.firebaseapp.com",
    databaseURL: "https://hangman-pro-aefa1.firebaseio.com",
    projectId: "hangman-pro-aefa1",
    storageBucket: "hangman-pro-aefa1.appspot.com",
    messagingSenderId: "482798948867",
    appId: "1:482798948867:web:d04e91106aa704e5d4f436"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();