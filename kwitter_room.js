
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyCtrf9NMs00ZK1sCRsIrUhy3MOFnpJ-W_M",
  authDomain: "chatterbox-895fb.firebaseapp.com",
  databaseURL: "https://chatterbox-895fb-default-rtdb.firebaseio.com",
  projectId: "chatterbox-895fb",
  storageBucket: "chatterbox-895fb.appspot.com",
  messagingSenderId: "826192767507",
  appId: "1:826192767507:web:66403bd7f74418836d2de6",
  measurementId: "G-YGSQQ8X34G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);


window.location = "kwitter_page.html"
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name")
     window.location = "index.html"


}
