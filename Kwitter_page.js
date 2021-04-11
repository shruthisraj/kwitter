// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBQk4tRzfC6wmv67LJtLXQ9z6mlxxkxRaw",
    authDomain: "kwitterproject-fa4f0.firebaseapp.com",
    databaseURL: "https://kwitterproject-fa4f0-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-fa4f0",
    storageBucket: "kwitterproject-fa4f0.appspot.com",
    messagingSenderId: "639383444354",
    appId: "1:639383444354:web:c946901d2f78877e530d9b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();


function logOut(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "Kwitter.html";
}

