var express = require('express');
var router = express.Router();
const Cricket = require('../modal/cricket')
const OdiData = require('../modal/odidata')
const testData = require('../modal/testData')

router.post('/', async (req, res, next) => {
    try {
        let cricket = await Cricket.create(req.body)
        res.json({ cricket })
    } catch (error) {
        next(error)
    }
})

router.post('/odi', async (req, res, next) => {
    try {
        let odiData = await OdiData.create(req.body)
        res.json({ odiData })
    } catch (error) {
        next(error)
    }
})


router.get('/odi', async (req, res, next) => {
    try {
        let odiData = await OdiData.find({})
        res.json({ odiData })
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
