// Setup all sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const snare = new Audio('sounds/snare-drum.mp3');
const kick = new Audio('sounds/kick-drum.mp3');
const hihat = new Audio('sounds/hi-hat.mp3');

// query instruments
const metronome = document.querySelector('#metronome');
const kickCheckBox = document.querySelector('#kick-drum');
const snareCheckBox = document.querySelector('#snare-drum');
const hihatCheckBox = document.querySelector('#hi-hat');

// query instrument beat number input
const kickBeat = document.querySelector('#kickBeat')
const snareBeat = document.querySelector('#snareBeat')
const hihatBeat = document.querySelector('#hihatBeat')

// queryselect html displayCount to display metronome count
const displayCount = document.querySelector('.displayCount');

// query select clear buttons
const kickClear = document.querySelector('#kickClear');
const snareClear = document.querySelector('#snareClear');
const hihatClear = document.querySelector('#hihatClear');

// keep track of the current metronome count
let metronomeCount = 0;


// clear counters
kickClear.addEventListener('click', () => {
    kickBeat.value = '';
})

snareClear.addEventListener('click', () => {
    snareBeat.value = '';
})

hihatClear.addEventListener('click', () => {
    hihatBeat.value = '';
})



// This function is called every 600ms
function update() {

    // check to see if metronome if checked / play metronome
    if (metronome.checked === true) {

        if (metronomeCount == 1) {
            tock.play();
        }
        else {
            tick.play();
        }
    }

    // play kick drum /////////////////////////////////////////////
    if (kickCheckBox.checked === true && kickBeat.value == '') {
        kick.play()
        console.log(kickBeat.value)
    }

    // if the value of kickBeat is 1, play 
    if (kickCheckBox.checked === true && kickBeat.value == '1') {
        if (metronomeCount == 0) {

            kick.play()
            console.log(kickBeat.value)
        }
    }

    // if the value of kickBeat is 2, play 
    if (kickCheckBox.checked === true && kickBeat.value == '2') {
        if (metronomeCount == 1) {

            kick.play()
            console.log(kickBeat.value)
        }
    }

    // if the value of kickBeat is 3, play 
    if (kickCheckBox.checked === true && kickBeat.value == '3') {
        if (metronomeCount == 2) {

            kick.play()
            console.log(kickBeat.value)
        }
    }

    // if the value of kickBeat is 4, play 
    if (kickCheckBox.checked === true && kickBeat.value == '4') {
        if (metronomeCount == 3) {

            kick.play()
            console.log(kickBeat.value)
        }
    }




    // play snare drum /////////////////////////////////////////////
    if (snareCheckBox.checked === true && snareBeat.value == '') {
        snare.play()
    }

    // if the value of snareBeat is 1, play 
    if (snareCheckBox.checked === true && snareBeat.value == '1') {
        if (metronomeCount == 0) {

            snare.play()
            console.log(snareBeat.value)
        }
    }

    // if the value of snareBeat is 2, play 
    if (snareCheckBox.checked === true && snareBeat.value == '2') {
        if (metronomeCount == 1) {

            snare.play()
            console.log(snareBeat.value)
        }
    }

    // if the value of snareBeat is 3, play 
    if (snareCheckBox.checked === true && snareBeat.value == '3') {
        if (metronomeCount == 2) {

            snare.play()
            console.log(snareBeat.value)
        }
    }

    // if the value of snareBeat is 4, play 
    if (snareCheckBox.checked === true && snareBeat.value == '4') {
        if (metronomeCount == 3) {

            snare.play()
            console.log(snareBeat.value)
        }
    }



    // play hihat /////////////////////////////////////////////
    if (hihatCheckBox.checked === true && hihatBeat.value == '') {
        hihat.play()
    }

    // if the value of hihatBeat is 1, play 
    if (hihatCheckBox.checked === true && hihatBeat.value == '1') {
        if (metronomeCount == 0) {

            hihat.play()
            console.log(hihatBeat.value)
        }
    }

    // if the value of hihatBeat is 2, play 
    if (hihatCheckBox.checked === true && hihatBeat.value == '2') {
        if (metronomeCount == 1) {

            hihat.play()
            console.log(hihatBeat.value)
        }
    }

    // if the value of hihatBeat is 3, play 
    if (hihatCheckBox.checked === true && hihatBeat.value == '3') {
        if (metronomeCount == 2) {

            hihat.play()
            console.log(hihatBeat.value)
        }
    }

    // if the value of hihatBeat is 4, play 
    if (hihatCheckBox.checked === true && hihatBeat.value == '4') {
        if (metronomeCount == 3) {

            hihat.play()
            console.log(hihatBeat.value)
        }
    }


    // incremement metronomeCount by 1
    metronomeCount = metronomeCount + 1;



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



