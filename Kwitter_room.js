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
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  //Start Code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
  //End Code
});});}
  getData();

  function addRoom(){
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "Kwitter_page.html"
  }

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";

} 

