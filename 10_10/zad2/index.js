const express = require('express')
const path = require('path')

const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'glowna.html'))
})

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, 'kontakt.html'))
})

app.get('/wyslij', (req, res) => { 
    res.redirect('/kontakt?fail')
})

app.listen(3000, () => {
    console.log(`App listening on port: ${port}`)
})

//