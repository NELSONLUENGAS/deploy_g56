const { query, body, params, validationResult } = require('express-validator');


const createUser = [
    body('password')
        .notEmpty().withMessage('El campo es requerido')
        // .length(6).withMessage('Debería tener al menos 6')
        .isString().withMessage('Debería ser String'),
    body('username')
        .notEmpty().withMessage('El campo es requerido')
        .isString().withMessage('Debería ser String'),
    body('email')
        .notEmpty().withMessage('El campo es requerido')
        .isEmail().withMessage('Debería Ser un email correcto')
        .isString().withMessage('Debería ser String'),
    (req, res, next) => {
        const errors = validationResult(req).mapped()

        if (Object.keys(errors).length) res.status(400).json(errors)

        next()
    }
]

module.exports = {
    createUser
}