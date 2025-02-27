// Importera nut.js
const { keyboard, Key } = require('@nut-tree-fork/nut-js');

let stopTime = '16:36:00';

// Simulera tryck på F14
async function pressF14() {
  await keyboard.pressKey(Key.F14);
  await keyboard.releaseKey(Key.F14);
  // console.log('Running');
  let now = new Date().toLocaleTimeString();
  if (now > stopTime) {
    // console.log('Stopped');
    stopF14();
  }
}

// Funktion för att stoppa exekvering
function stopF14() {
  clearInterval(intervalID);
}

// Anropa funktionen var 20 sekund (20000 millisekunder)
let intervalID = setInterval(pressF14, 20000);
