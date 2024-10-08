const UsersRouter = require('express').Router()
const UserController = require('../controllers/users.controller')
const UserValidator = require('../validators/user.validator')

UsersRouter.post('/create', UserValidator.createUser, (req, res) => {
    res.send('Usuario creado')
})

UsersRouter.get('/get/:id', (req, res) => {
    res.send('Detalle del usuario')
})

UsersRouter.delete('/delete/:id', (req, res) => {
    res.send('Usuario eliminado')
})

UsersRouter.put('/update/:id', (req, res) => {
    res.send('Usuario actualizado')
})

UsersRouter.get('/all', UserController.handleGetAllUsers)

module.exports = {
    UsersRouter
}