const { db } = require("../config/db")

const findOneById = async (id) => {
    try {
        const SQLValues = [id]
        const SQLRequest = "SELECT * FROM users WHERE id = $1"

        const { rows: response } = await db.query(SQLRequest, SQLValues)

        return response
    } catch (error) {
        throw error
    }

}

const findOneByEmail = async (email) => {
    try {
        const SQLRequest = "SELECT * FROM users WHERE email = $1"
        const SQLValues = [email]

        const { rows: response } = await db.query(SQLRequest, SQLValues)

        return response
    } catch (error) {
        throw error
    }

}

const all = async () => {
    try {
        const SQLRequest = "SELECT * FROM users"
        const SQLValues = [email]

        const { rows: response } = await db.query(SQLRequest, SQLValues)

        return response
    } catch (error) {
        throw error
    }

}

const destroy = async (id) => {
    try {
        const SQLRequest = "DELETE FROM users WHERE id = $1 RETURNING *"
        const SQLValues = [id]

        const { rows: response } = await db.query(SQLRequest, SQLValues)

        return response
    } catch (error) {
        throw error
    }

}

module.exports = {
    findOneById,
    findOneByEmail,
    destroy,
    all
}