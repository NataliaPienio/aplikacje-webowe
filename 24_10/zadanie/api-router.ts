// const students = [
//     { "id":  1, "name": "Maja", "surname": "Obi", "email": "maja.obi@email.com"}, 
//     { "id":  2, "name": "Karol", "surname": "Nowak", "email": "karol.nowak@email.com"}, 
//     { "id":  3, "name": "Mateusz", "surname": "Przybylski", "email": "mateusz.przybylski@email.com"}, 
//     { "id":  4, "name": "Franek", "surname": "Wozniak", "email": "franek.wozniak@email.com"}, 
//     { "id":  5, "name": "Lech", "surname": "Orłowski", "email": "lech.orlowski@email.com"}, 
//     { "id":  6, "name": "Robert", "surname": "Prawy", "email": "robert.prawy@email.com"}, 
//     { "id":  7, "name": "Szymon", "surname": "Hamownia", "email": "szymon.hamownia@email.com"}, 
//     { "id":  8, "name": "Iwona", "surname": "Cicha", "email": "iwona.cicha@email.com"}, 
//     { "id":  9, "name": "Aneta", "surname": "Głośna", "email": "aneta.glosna@email.com"}, 
//     { "id":  10, "name": "Grażyna", "surname": "Szybka", "email": "grazyna.szybka@email.com"}
// ]

// const subjects = [
//     { "id": 1, "name": "j. angielski", "hoursAWeek": 3},
//     { "id": 2, "name": "j. polski", "hoursAWeek": 3},
//     { "id": 3, "name": "Matematyka", "hoursAWeek": 4},
//     { "id": 4, "name": "WF", "hoursAWeek": 3},
//     { "id": 5, "name": "Biologia", "hoursAWeek": 1},
//     { "id": 6, "name": "Chemia", "hoursAWeek": 1},
//     { "id": 7, "name": "Historia", "hoursAWeek": 1},
//     { "id": 8, "name": "Fizyka", "hoursAWeek": 1},
//     { "id": 9, "name": "Geografia", "hoursAWeek": 1},
//     { "id": 10, "name": "Informatyka", "hoursAWeek": 2},
// ]

import express, { Express, Request, Response, text } from 'express'
import { createConnection, Connection, MysqlError } from 'mysql'
const router = express.Router()

const getTableData: any = (tableName: string, id: string = "") => {
    let sqlQuery = `SELECT * FROM ${tableName}`
    if (id != "") sqlQuery += ` WHERE id = ${id}`

    const connection = createConnection({ host: '172.22.48.1', user: 'root', password: '', database: 'paw_jw' })
    connection.connect(err => {
        if (err) throw err

        let tableData
        connection.query(sqlQuery, (err, result) => {
            if (err) throw err
            tableData = result
        })
        return tableData
    })
}

router.get('/', (req, res) => {
    const apiLinks = {
        "students": "/api/students",
        "subjects": "/api/subjects"
    }

    res.send(apiLinks)
})

router.get('/students', (req, res) => { res.send(getTableData('students')) })
router.get('/students/:id', (req, res) => { res.send(getTableData('students', req.params.id)) })

router.get('/subjects', (req, res) => { res.send(getTableData('subjects')) })
router.get('/subjects/:id', (req, res) => { res.send(getTableData('subjects', req.params.id)) })



export { router as apiRouter }