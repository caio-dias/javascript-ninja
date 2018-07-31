'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

//parseando dados vindo de request
app.use(bodyParser.urlencoded({extended: false}))
//resolvendo cross origin
app.use(cors())

const users = [{
    username: 'joao',
    name: 'João',
    age: 30
}, {
    username: 'maria',
    name: 'Maria',
    age: 12
}
]

app.get('/', (req, res) => {
    res.json({response: 'Home'})
})

app.get('/user', (req, res) => {
    res.json({ response: 'User' })
})

app.get('/user/:username', (req, res) => {
    let username = req.params.username
    let hasUser = users.some((user) => user.username === username)
    if (hasUser) {
        return res.json(users.filter((user) => user.username === username)[0])
    }
    res.json({ error: 'Usuario não encontrado!'})
})


app.post('/user', (req, res) => {
    let username = req.body.username
    let age = req.body.age
    let user = req.body.user
    let hasUser = users.some((user) => user.username === username)

    if (!hasUser) {
        users.push({
            username: username,
            age: age,
            user: user
        })    
    }
    res.json(users)
})

app.listen(3001)