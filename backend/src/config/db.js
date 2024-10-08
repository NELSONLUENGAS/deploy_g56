require('dotenv').config()
const { Pool } = require('pg')

const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env

const db = new Pool({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    database: DB_NAME,
    allowExitOnIdle: true
})

const handleCreateTables = async () => {
    try {

        await db.query(
            `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `)

        await db.query(
            `
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                user_id INT REFERENCES users (id) ON DELETE CASCADE,
                title VARCHAR(200) NOT NULL UNIQUE,
                content TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `)

    } catch (error) {
        throw error
    }
}

const handleInsertData = async () => {
    try {

        await db.query(
            `
            INSERT INTO
                users (username, email, password)
            VALUES (
                    'john_doe',
                    'john@example.com',
                    'hashed_password_1'
                ),
                (
                    'jane_smith',
                    'jane@example.com',
                    'hashed_password_2'
                ),
                (
                    'alice_jones',
                    'alice@example.com',
                    'hashed_password_3'
                ) ON CONFLICT (email) DO NOTHING;
        `)

        await db.query(
            `
            INSERT INTO
                posts (user_id, title, content)
            VALUES (
                    1,
                    'Primer Post de John',
                    'Este es el contenido del primer post de John.'
                ),
                (
                    1,
                    'Segundo Post de John',
                    'Este es el contenido del segundo post de John.'
                ),
                (
                    2,
                    'Post de Jane',
                    'Este es el contenido del post de Jane.'
                ),
                (
                    3,
                    'Post de Alice',
                    'Este es el contenido del post de Alice.'
                ) ON CONFLICT (title) DO NOTHING;
        `)

    } catch (error) {
        throw error
    }
}


const handleSetupDatabase = async () => {
    try {
        await handleCreateTables()
        await handleInsertData()

        console.log('¡Database Setup sucessfully!')
    } catch (error) {
        throw error
    }
}

module.exports = {
    db,
    handleSetupDatabase
}