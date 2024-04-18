const deleteUser = require('../services/DeleteUser');

async function handleDeleteUser(req, res){
    try {
        const userId = req.params.userId;
        const deletedUser = await deleteUser(userId);
        res.send(`User ${deletedUser} deleted!`);
    } catch (error) {
        console.error('Error handling delete user:', error);
        res.status(500).send('Internal Server Error');
    }

}
module.exports = handleDeleteUser;