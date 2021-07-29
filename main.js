// Setup all sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

// keep track of the current metronome count
let metronomeCount = 0;



// This function is called every 600ms
function update() {

    // incremement metronomeCount by 1
    metronomeCount++;

    // Play the 'tick' sound
    tick.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



