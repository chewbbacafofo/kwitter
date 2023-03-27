const firebaseConfig = {
    apiKey: "AIzaSyCDbFKsk40E-N_sVU3JZyIJ6uIaYVG7apA",
    authDomain: "kwitter-a80f4.firebaseapp.com",
    databaseURL: "https://kwitter-a80f4-default-rtdb.firebaseio.com",
    projectId: "kwitter-a80f4",
    storageBucket: "kwitter-a80f4.appspot.com",
    messagingSenderId: "897719007620",
    appId: "1:897719007620:web:c337ca461302f00ddac5d1"
  };

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem-vindo " + user_name +"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}