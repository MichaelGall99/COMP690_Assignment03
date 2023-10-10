let coinFlip

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>The \"Coin Flip Streak\" Game</h3>")

do {
    coinFlip = Math.round(Math.floor(Math.random() * 2))             // returns a random number 0-1

    if (coinFlip === 0){
        console.log('Heads')
    } else {
        console.log('Tails')
    }
} while (coinFlip != 1)
