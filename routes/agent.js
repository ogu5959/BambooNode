const express  = require('express')
const router   = express.Router()
const nunjucks = require('nunjucks')

router.get('/', (req, res) => {
    res.send('agent')
});

router.get('/list', (req, res) => {
    res.render( 'agent/list.html', {
        message : 'Hello!'
    })
});

module.exports = router;