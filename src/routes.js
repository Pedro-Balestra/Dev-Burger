const { Router } = require('express')
const { response } = require('./app')

const routes = new Router()

route.get('/', (req, res) => {
    return response.status(200).json({ message: 'Hello!' })
})

module.exports = routes