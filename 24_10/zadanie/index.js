"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = require("mysql");
const path = __importStar(require("path"));
const api_router_1 = require("./api-router");
const port = 3000;
const app = (0, express_1.default)();
app.use(express_1.default.static(path.join(__dirname, '/public')));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api', api_router_1.apiRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/homepage.html'));
});
app.get('/kontakt', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/html/contact.html'));
});
app.post('/kontakt', (req, res) => {
    const connection = (0, mysql_1.createConnection)({ host: '172.22.48.1', user: 'root', password: '', database: 'paw_jw' });
    connection.connect(err => {
        if (err)
            throw err;
        connection.query(`INSERT INTO messages (name, email, topic, message_content) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.topic}', '${req.body.message}')`, (err) => { if (err)
            throw err; });
    });
    res.redirect('/');
});
app.listen(3000, () => {
    console.log(`App listening on port: ${port}`);
});
