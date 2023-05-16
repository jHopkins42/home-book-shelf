const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3001

const app = express()

app.get('/api/user-routes', (req, res) =>{
    res.json({ nessage: 'getting links '})
})

app.listen(port, () => console.log(`Server started on port ${port}`))


