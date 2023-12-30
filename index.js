require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello Garv!')
})

app.get('/name', (req, res) => {
    res.send('Garvit Varshney')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at our Website</h1>')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})