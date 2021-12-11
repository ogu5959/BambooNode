const express = require('express')
const app     = express()

app.listen(3000, () => {
    console.log('Express server on port 3000!')
})

app.get('/', (req, res) => {
    res.send('Hello Express!!')
})

app.get('/getAgent', (req, res) => {
    res.send('Get Agent')
})