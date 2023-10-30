import express, { Express, Request, Response } from 'express'
import { createConnection, Connection, MysqlError } from 'mysql'
import * as path from 'path'
import { apiRouter } from './api-router'

const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/homepage.html'))
})

app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/contact.html'))
})

app.post('/kontakt', (req, res) => { 
    const connection = createConnection({ host: '172.22.48.1', user: 'root', password: '', database: 'paw_jw' })
    connection.connect(err => {
        if (err) throw err
        connection.query(
            `INSERT INTO messages (name, email, topic, message_content) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.topic}', '${req.body.message}')`, 
            (err) => { if (err) throw err }
        )
    })
    res.redirect('/')
})

app.listen(3000, () => {
    console.log(`App listening on port: ${port}`)
})

    // kod od Jakuba Walkowiaka