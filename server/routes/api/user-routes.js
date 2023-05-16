const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json({ nessage: 'getting links '})
})
router.post('/', (req, res) =>{
    res.status(200).json({ nessage: 'adding links '})
})
router.put('/:id', (req, res) =>{
    res.status(200).json({ nessage: `Update links ${req.params.id}`})
})
router.delete('/:id', (req, res) =>{
    res.status(200).json({ nessage: `Delete links ${req.params.id}`})
})

module.exports = router
