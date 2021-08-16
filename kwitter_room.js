var firebaseConfig = {
      apiKey: "AIzaSyC8HqKmIT8rGEDZ1nnwJCWgORfGp4D7Mh0",
      authDomain: "ridhamchatapp-3b5b7.firebaseapp.com",
      databaseURL: "https://ridhamchatapp-3b5b7-default-rtdb.firebaseio.com",
      projectId: "ridhamchatapp-3b5b7",
      storageBucket: "ridhamchatapp-3b5b7.appspot.com",
      messagingSenderId: "519787281397",
      appId: "1:519787281397:web:b33ea6ff4c8a0583ed3ebc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

  
user_name=localStorage.getItem('user_name');
document.getElementById('user_name').innerHTML="welcome   "+user_name;

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name- " + Room_names);
 console.log("getdata");
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row; 
}); });}
getData();
function addRoom()
{
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
     purpose:"adding user"
    });
     localStorage.setItem("room_name",room_name);

     window.location="kwitter_page.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}

function logout()
{
    window.location="index.html";
}