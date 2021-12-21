const express  = require('express')
const nunjucks = require('nunjucks')
const agent    = require('./routes/agent')

const app      = express()

nunjucks.configure('template', {
    autoescape : true,  // 
    express : app       // app 객체 연결
})

app.use('/agent', agent)

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.listen(3000, () => {
    console.log('Express server on port 3000!')
})