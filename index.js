require('dotenv').config()
const express = require('express')

//import Express  from "express"

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Flutter App World')
})

app.get('/login', (req, res) => {

    res.send('<h1>Please login to website!</h2>')
})

app.get('/youtube', (req, res) => {
        res.send('<h2>Backend code using express</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})