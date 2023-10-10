let x

for (x=1; x<=100; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
        console.log(`Marco! Polo!`)
    } else if (x % 3 == 0) {
        console.log(`Marco!`)
    } else if (x % 5 == 0) {
        console.log(`Polo!`)
    }
}