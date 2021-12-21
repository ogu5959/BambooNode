const express = require('express')
const router  = express.Router()

router.get('/', (req, res) => {
    res.send('agent')
});

router.get('/list', (req, res) => {
    res.send('agent list')
});

module.exports = router;