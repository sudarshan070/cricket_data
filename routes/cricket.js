var express = require('express');
var router = express.Router();
const Cricket = require('../modal/cricket')

router.post('/', async (req, res, next) => {
    try {
        let cricket = await Cricket.create(req.body)
        res.json({ cricket })
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        let cricket = await Cricket.find({})
        res.json({ cricket })
    } catch (error) {
        next(error)
    }
})

module.exports = router;
