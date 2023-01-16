const firebaseConfig = {
    apiKey: "AIzaSyB3MxBBlI18yDG4R_lKfgq4MSxNva0VwSU",
    authDomain: "capstone-project-92e89.firebaseapp.com",
    databaseURL: "https://capstone-project-92e89-default-rtdb.firebaseio.com",
    projectId: "capstone-project-92e89",
    storageBucket: "capstone-project-92e89.appspot.com",
    messagingSenderId: "1083651610306",
    appId: "1:1083651610306:web:40c4b09dc6c49724860d5b"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding_room_name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room name - " + Room_names);
    row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}