let x, y
let hashLine

// DISPLAY THE NAME OF THIS PART OF THE ASSIGNMENT
// document.writeln("<h3>Looping a Triangle</h3>")

for (x=1; x<=7; x++) {
    hashLine = ""
    for (y=1; y<=x; y++) {
        hashLine += "#"
    }
    console.log(hashLine)
}
