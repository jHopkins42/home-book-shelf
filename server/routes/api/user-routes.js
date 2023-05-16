const express = require('express')
const router = express.Router()
const { getUsers, 
    setUser, 
    putUsers, 
    deleteUsers
 } = require('../../controllers/user-controller')

 
router.get('/', getUsers)

router.post('/', setUser)

router.put('/:id',  putUsers)

router.delete('/:id', deleteUsers)

module.exports = router
