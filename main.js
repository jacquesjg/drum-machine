// Setup all sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

// queryselect html displayCount to display metronome count
const displayCount = document.querySelector('.displayCount');

// keep track of the current metronome count
let metronomeCount = 0;



// This function is called every 600ms
function update() {

    // incremement metronomeCount by 1
    metronomeCount = metronomeCount + 1;

    // Play the 'tick' sound
    if (metronomeCount == 1) {
        tock.play();
    }
    else {
        tick.play();
    }

    // change the innerText of displayCount variable
    displayCount.innerText = metronomeCount;

    // reset metronomeCount on 4th beat    
    if (metronomeCount == 4) {
        metronomeCount = 0
    }
}


// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);



