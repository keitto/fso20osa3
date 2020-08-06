const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

const persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
    ]

app.get('/',(req,res) => {
    res.send('<h1>hello</h1>')
})

app.get('/api/persons', (req,res) => {
    res.send(persons)
})

app.listen(port, () => {
    console.log('osa3 server up')
})