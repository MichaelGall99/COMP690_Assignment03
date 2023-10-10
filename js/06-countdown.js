let countDown
let x

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>Countdown</h3>")

// PROMPT USER FOR THE COUNTDOWN STARTING NUMBER
do {
    countDown = prompt('Please enter the countdown starting number:')

    if (isNaN(countDown) || countDown != parseInt(countDown) || 
        countDown.length != parseInt(countDown).toString().length || countDown < 1) {

        alert('You must enter a whole number greater than or equal to 1')
    }
} while (isNaN(countDown) || countDown != parseInt(countDown) || 
        countDown.length != parseInt(countDown).toString().length || countDown < 1)

// DISPLAY THE COUNTDOWN TO THE CONSOLE WINDOW 
for(x=countDown; x >= 0; x--) {
    console.log(x)
}
