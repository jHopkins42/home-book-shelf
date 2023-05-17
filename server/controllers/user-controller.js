// import constants/handlers
const asyncHandler = require('express-async-handler')

// >description: get book links
// route is Get / api/user-routes
// Access is Private: (for now)

const getUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ nessage: 'getting links '})
})

// >description: set book links
// route is Post / api/user-routes
// Access is Private: (for now)

const setUser = asyncHandler(async (req, res) => {
    if(!req.body.text){
    res.status(400)
    throw new Error('missing info')
}

    res.status(200).json({ nessage: 'adding links '})
})

// >description: updating book links
// route is Put / api/user-routes/:id
// Access is Private: (for now)

const putUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ nessage: `Update links ${req.params.id}`})
})

// >description: deleting book links
// route is Delete / api/user-routes/:id
// Access is Private: (for now)

const deleteUsers = asyncHandler(async (req, res) => {
    res.status(200).json({ nessage: `Delete links ${req.params.id}`})
})

module.exports ={
    getUsers,
    setUser,
    putUsers,
    deleteUsers,
}
