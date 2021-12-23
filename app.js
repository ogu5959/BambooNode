const express  = require('express')
const nunjucks = require('nunjucks')
const agent    = require('./routes/agent')

const app      = express()

nunjucks.configure('template', {
    autoescape : true,  // 이스케이프 활성화 XSS 공격 방지
    express : app       // app 객체 연결
})

// Middleware Test 0
function vipMiddleware(req, res, next) {
    console.log("VIP Middleware")
    next()
}  

// Middleware
app.use('/agent', vipMiddleware, agent)

app.get('/', (req, res) => {
    res.send('Hello Express!')
})

app.listen(3000, () => {
    console.log('Express server on port 3000!')
})