const listUsers = require('../services/ListUsers');

async function handleListUsers(req, res){
    const users = await listUsers();
    res.send(users);
}
module.exports = handleListUsers;