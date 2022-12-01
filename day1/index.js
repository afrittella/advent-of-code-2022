const fs = require('fs')
const path = require("path");
const readline = require('readline')

const elves = []

const readInterface = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, './input')),
    console: false
})

let acc = 0

readInterface.on('line', (line) => {
    const num = parseInt(line)

    if (isNaN(num)) {
        if (acc > 0) {
            elves.push(acc)
        }

        acc = 0
    } else {
        acc += num
    }
})

readInterface.on('close', () => {
    elves.sort((a, b) => b - a)

    // First part
    console.log('First part', elves[0])

    // Second part
    console.log('Second part', elves[0] + elves[1] + elves[2])
})


