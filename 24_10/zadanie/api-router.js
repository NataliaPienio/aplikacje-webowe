"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const mysql_1 = require("mysql");
const router = express_1.default.Router();
exports.apiRouter = router;
const getTableData = (tableName, id = "") => {
    let sqlQuery = `SELECT * FROM ${tableName}`;
    if (id != "")
        sqlQuery += ` WHERE id = ${id}`;
    const connection = (0, mysql_1.createConnection)({ host: '172.22.48.1', user: 'root', password: '', database: 'paw_jw' });
    connection.connect(err => {
        if (err)
            throw err;
        return connection.query(sqlQuery, (err, result) => {
            if (err)
                throw err;
            return result;
        });
    });
};
router.get('/', (req, res) => {
    const apiLinks = {
        "students": "/api/students",
        "subjects": "/api/subjects"
    };
    res.send(apiLinks);
});
router.get('/students', (req, res) => { res.send(getTableData('students')); });
router.get('/students/:id', (req, res) => { res.send(getTableData('students', req.params.id)); });
router.get('/subjects', (req, res) => { res.send(getTableData('subjects')); });
router.get('/subjects/:id', (req, res) => { res.send(getTableData('subjects', req.params.id)); });
