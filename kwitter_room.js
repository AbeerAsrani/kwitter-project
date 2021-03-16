var firebaseConfig = {
    apiKey: "AIzaSyA4hnkMBQJk9oM1yuFalvX00oBGttRblnI",
    authDomain: "kwiiterproject.firebaseapp.com",
    databaseURL: "https://kwiiterproject-default-rtdb.firebaseio.com",
    projectId: "kwiiterproject",
    storageBucket: "kwiiterproject.appspot.com",
    messagingSenderId: "159391931656",
    appId: "1:159391931656:web:fd46fe23108d3cd32fe0bd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();