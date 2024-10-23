// Importera nut.js
const { keyboard, Key } = require('@nut-tree-fork/nut-js');

// Simulera tryck på F14
async function pressF14() {
  await keyboard.pressKey(Key.F14);
  await keyboard.releaseKey(Key.F14);
  console.log('20 seconds passed');
}

// Anropa funktionen var 10 sekund (10000 millisekunder)
setInterval(pressF14, 20000);
