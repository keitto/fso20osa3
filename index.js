const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

app.get('/',(req,res) => {
    res.send('<h1>hello</h1>')
})

app.listen(port, () => {
    console.log('osa3 server up')
})