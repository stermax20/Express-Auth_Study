const prisma = require('../config/db');

const createUser = async (username, password) => {
    return await prisma.user.create({
        data: {
            username,
            password,
        },
    });
};

const findUserByUsername = async (username) => {
    return await prisma.user.findUnique({
        where: {
            username,
        },
    });
};

module.exports = { createUser, findUserByUsername };
