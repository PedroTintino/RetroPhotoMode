const prismaClient = require('../index');

async function listUsers(){
    const users = await prismaClient.user.findMany();
    return users;
}

module.exports = listUsers;