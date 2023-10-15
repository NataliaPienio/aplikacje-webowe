const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3000


const server = http.createServer(async (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        await fs.readFile('glowna.html', 'utf8', (err, data) => {
            res.statusCode = 200
            res.setHeader('Content-Type','text/html')
            res.end(data)
        })
    } else if (url === '/dziekujemy') {
        await fs.readFile('thank-you-page.html', 'utf8', (err, data) => {
            res.statusCode = 200
            res.setHeader('Content-Type','text/html')
            res.end(data)
        })
    } else if (url === '/kontakt' && method === 'POST') {
        const body = []
        req.on('data', chunk => { body.push(chunk) })

        req.on('end', async () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split('=')[1]
            await fs.writeFileSync(`contact/message-${Date.now().toString()}.txt`, message, 'utf8')

            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        })
    } else if (url === '/api') {
        const array = {
            'cos': 1,
            'cos1': 2,
            'cos2': 3
        }

        res.statusCode = 200
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify(array))
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type','application/json')
        res.end(JSON.stringify('404 - Address not found'))
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`)
})    
