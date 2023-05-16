const express = require('express')
const router = express.Router()
const { getUsers, 
    setUser, 
    putUsers, 
    deleteUsers
 } = require('../../controllers/user-controller')

 router.route('/').get(getUsers).post(setUser)
 router.route('/:id').delete(deleteUsers).put(putUsers)


module.exports = router
