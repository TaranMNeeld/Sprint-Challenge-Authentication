const db = require('../db-config.js');

module.exports = {
    getUserById,
    getUserBy,
    addUser
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

function getUserBy(filter) {
    return db('users')
        .where(filter)
        .first();
}

async function addUser(user) {
    const id = await db('users')
        .insert(user);
    return getUserById(id);
}