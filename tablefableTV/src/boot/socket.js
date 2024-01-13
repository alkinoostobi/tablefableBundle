import io from "socket.io-client";
import { useCombatStore } from "../stores/combat";
const socket = io("http://139.91.81.103:8080");
const combat = useCombatStore();
socket.on("initiatives", (data) => {
  console.log(combat.initiatives);
    combat.initiatives = data; // Set the combat.js initiatives array
});
socket.on("turnChange", (data) => {
  combat.playerturn = data; // Change the turn in the combat.js store
});
socket.on("removeFromInitiative", (data) => {
  const index = combat.initiatives.indexOf(data);
  if (index !== -1) {
    combat.initiatives.splice(index, 1); // Remove from the combat.js initiatives array
  }
});

socket.on("addPlayer", (data) => {
  combat.players.push(data); // Add player to the combat.js players array
});

socket.on("removePlayer", (data) => {
  const index = combat.players.indexOf(data);
  if (index !== -1) {
    combat.players.splice(index, 1); // Remove from the combat.js players array
  }
});

socket.on("addToInitiative", (data) => {
  combat.initiatives.push(data); // Add to the combat.js initiatives array
});

socket.on("addToLog", (data) => {
  combat.logs.push(data); // Add to the combat.js logs array
});

let GesturesStr= [
  "SWIPE_LEFT",
"SWIPE_UP",
"SWIPE_DOWN",
"SWIPE_RIGHT",
"CIRCLE_CLOCKWISE",
"CIRCLE_COUNTERCLOCKWISE",
"PINCH",
];
window["electronAPI"].onGesture(function(arg) {
  console.log("Gesture recognised: ", GesturesStr[arg]);
  
});