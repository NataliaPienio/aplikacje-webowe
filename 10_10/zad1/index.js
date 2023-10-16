const stream = require('stream')
const fs = require('fs')

const randomNumbers = () => {
    let numbers = []
    for (let n = 1; n <= 20; n++) {
        numbers.push(Math.floor(Math.random() * (2557) - 420))
    }
    return numbers
}

const readable = stream.Readable.from(randomNumbers())
const fileStream = fs.createWriteStream(`numbers/random-${Date.now().toString()}.txt`)


readable.on('data', chunk => {
    fileStream.write(chunk.toString() + " ")
})