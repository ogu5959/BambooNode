const express = require('express')
const agent   = require('./routes/agent')

const app     = express()

app.use('/agent', agent)

app.get('/', (req, res) => {
    res.send('Hello Express!!')
})

app.listen(3000, () => {
    console.log('Express server on port 3000!')
})