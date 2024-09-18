// Importera nut.js
const { keyboard, Key } = require('@nut-tree-fork/nut-js');

// Ställ in keyboard layouts (valfritt beroende på ditt system)
// keyboard.useEnglishKeyboard(); // Används om engelskt tangentbordslayout används

// Simulera tryck på F14
async function pressF14() {
    await keyboard.pressKey(Key.F14);
    await keyboard.releaseKey(Key.F14);
    console.log('F14 key pressed');
}

// Anropa funktionen var 10 sekund (10000 millisekunder)
setInterval(pressF14, 10000);
