const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3001

morgan.token('body', function getBody(req) {
    return JSON.stringify(req.body)
})

app.use(cors())
app.use(express.static('build')) // express returns ./build/requestedFile if it exists
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

const generateId = () => {
    return Math.floor(Math.random() * 1000000); // 3.5
    // const maxId = Math.max(...persons.map(p =>p.id))
    // return maxId + 1
}

const rootPage = `<h1>Hello</h1>
<p>Try the following:</p>
<ul>
<li><a href="/info">info page</a></li>
<li><a href="/api/persons">persons api</a></li>
</ul>`

let persons = [
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

// now uses static in folder build
// app.get('/',(req,res) => {
//     res.send(rootPage)
// })
app.get('/info', (req,res) => {
    const entries = persons.length
    res.send(`<p>Phonebook has ${entries} entries</p>
        <p>${new Date()}</p>`)
})

app.get('/api/persons', (req,res) => {
    res.send(persons)
})
app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(n => n.id === id)
    if(person) {
        res.send(person)
    } else {
        res.status(404).end()
    }
})

app.post('/api/persons',(req, res) => {
    const body = req.body

    if(!body.name || !body.number) {
        res.status(400).json({error:`Name and/or number missing`})
        return
    }

    const person = {
        name:body.name.trim(),
        number:body.number.trim(),
        id:generateId()
    }

    if(person.name.length < 1 || person.number.length < 1) { 
        res.status(400).json({error:`Name and/or number empty`})
        return
    }

    if(persons.map(p => p.name).includes(person.name)) {
        res.status(400).json({error:`Name already exists, can't add duplicates`})
        return
    }

    persons = persons.concat(person)
    res.json(person)
})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id)
    const person = persons.find(n => n.id === id)
    if(person) {
        persons = persons.filter(n => n.id !== id)
        res.status(204).end()
    } else {
        res.status(204).end() // iffing in case we want to say 404
    }
})

app.listen(port, () => {
    console.log('osa3 server up')
})