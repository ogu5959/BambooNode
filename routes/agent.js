const express  = require('express')
const router   = express.Router()
const nunjucks = require('nunjucks')

// Middleware Test 1
function firstMiddleware (req, res, next) {
    console.log("First Middleware")
    next()
}

// Middleware Test 2
function secondMiddleware (req, res, next) {
    console.log("Second Middleware")
    next()
}

router.get('/', (req, res) => {
    res.send('agent')
});

router.get('/list', firstMiddleware, secondMiddleware, (req, res) => {
    res.render( 'agent/list.html', {
        message : 'Hello!'
    })
});

router.get('/list/write', ( req , res) => {
    res.render( 'agent/write.html');
});

router.post('/list/write', (req, res) => {
    console.log(req.body)
})

module.exports = router;