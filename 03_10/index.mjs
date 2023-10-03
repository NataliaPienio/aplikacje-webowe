import http from 'http'
import { readFile } from 'fs/promises'
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer(async (req,res) =>{
    const url = req.url
    if(url==='/'){
        res.statusCode = 200
        const html = await readFile('glowna.html')
        res.setHeader('Content-Type','text/html')
        res.write(html)
        res.end()
    }else if(url==='/dziekujemy'){
        res.statusCode = 200
        const html = await readFile('thanks-you-page.html')
        res.setHeader('Content-Type','text/html')
        res.write(html)
        res.end()
    }else if(url==='/api'){
        res.statusCode = 200
        const array = {
            'cos': 1,
            'cos2': 2,
            'cos3': 3
        }
        res.setHeader('Content-Type','text/html')
        res.write(JSON.stringify(array))
        res.end()
    }else{
       /* res.statusCode = 404
        res.write(JSON.stringify())
        res.end()*/
    }
 })

server.listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}/`)
 })