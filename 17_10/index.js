const express = require('express')
const app = express()
const port = 3000
const glownaRouter = require('./routes/glowna')
const kontaktRouter = require('./routes/kontakt')
const apiRouter = require('./routes/api')
const apiStudentsRouter = require('./routes/api_students')
const apiSubjectsRouter = require('./routes/api_subjects')


app.use(express.urlencoded({extended: true}))

app.use('/', glownaRouter)
app.get('/kontakt', kontaktRouter)
app.post('/kontakt', kontaktRouter)
app.get('/api', apiRouter)
app.get('/api/students', apiStudentsRouter)
app.get('/api/students/:id', apiStudentsRouter)
app.get('/api/subjects', apiSubjectsRouter)
app.get('/api/subjects/:id', apiSubjectsRouter)

app.listen(port, '127.0.0.1',()=>
{
    console.log(`App is listening on port ${port}!`)
})