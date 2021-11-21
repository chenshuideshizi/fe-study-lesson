const express = require('express')



const app = express()


app.get('/web*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})


const port = process.env.port || 3000


app.listen(port, () => console.log(`监听${port}端口`))
// supervisor 