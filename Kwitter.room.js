var firebaseConfig = {
  apiKey: "AIzaSyDMIRR-OLmz5yjlpbPVuBtDrOdjIbdiC5M",
  authDomain: "pantore-493cb.firebaseapp.com",
  databaseURL: "https://pantore-493cb-default-rtdb.firebaseio.com",
  projectId: "pantore-493cb",
  storageBucket: "pantore-493cb.appspot.com",
  messagingSenderId: "819625564888",
  appId: "1:819625564888:web:d5d063c5bb0acca68595ad",
  measurementId: "G-2MNXTKCJ43"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}