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
  console.log(firebase);
  const db = firebase.firestore();

 /*-------------------------------------------Firebase functions---------------------------------------------*/
//var ref = db.ref('scores');
//var data = {
  //name: "user",
  //score: 4
//}
//ref.push(data);
//console.log(data);

 //var htmlForPath = {};
 //var leaderboard = firebase.database().ref('score').limitToFirst(10);




//function showName() {
  //firebase.auth().onAuthStateChanged(function (user) {
    //console.log(user);
   //document.getElementById("name").innerHTML = user.displayName;
 // });
//} 
//showName();
