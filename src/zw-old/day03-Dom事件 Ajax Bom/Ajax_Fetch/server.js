const express = require('express')

const bodyParser = require('body-parser')

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const app = express()

app.use(bodyParser())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.options('/create_user', (req, res) => {
    console.log('optinos', req.body)

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
   
    res.json({data: '成功'})
    // res.status(500).send({data: 'Something broke!'});
})

app.post('/create_user', (req, res) => {
    console.log(req.body)

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
   
    res.json({data: '成功'})
    // res.status(500).send({data: 'Something broke!'});
})


app.get('/get_user', (req, res) => {
    console.log('/get_user', req.query)
    const {callback} = req.query;
    const data = {name: '张三', userId: req.query.userId}
    res.send(`${callback}(${JSON.stringify(data)})`)
    // callback(data)
})

const port = process.env.port || 3000
console.log(process.env.port)

app.listen(port, () => console.log(`监听${port}端口`))
// supervisor 