let coinFlip
let loops

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>The \"Coin Flip\" Game Redux</h3>")

// PROMPT USER FOR THE NUMBER OF LOOPS/ITERATIONS
do {
    loops = prompt("Enter how many interations you would like to perform:")

    if (isNaN(loops) || loops != parseInt(loops) || 
        loops.length != parseInt(loops).toString().length || loops < 1) {

        alert('You must enter a whole number greater than 0')
    }
} while (isNaN(loops) || loops != parseInt(loops) || 
         loops.length != parseInt(loops).toString().length || loops < 1)


// DISPLAY THE HEADS OR TAILS OUTCOME FOR EACH INTERATION OF THE GAME TO THE CONSOLE WINDOW 
for(let x=1; x <= loops; x++) {
    coinFlip = Math.round(Math.floor(Math.random() * 2))             // returns a random number 0-1

    if (coinFlip === 0){
        console.log('Heads')
    } else {
        console.log('Tails')
    }
}
