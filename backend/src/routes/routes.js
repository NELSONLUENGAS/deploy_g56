const router = require('express').Router()
const { logger } = require('../middlewares/loggerFs')
const { loggerManager } = require('../middlewares/logManager')
const { UsersRouter } = require('./users.routes')

router.use(loggerManager)

router.use('/users', UsersRouter)

module.exports = router