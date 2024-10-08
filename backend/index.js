require('dotenv').config()
const app = require('./src/app')
const { handleSetupDatabase } = require('./src/config/db')

const { PORT } = process.env


app.listen(PORT || 5000, async () => {
    console.log(`Server is running on http://localhost:${PORT || 5000}`)
    await handleSetupDatabase()
})

