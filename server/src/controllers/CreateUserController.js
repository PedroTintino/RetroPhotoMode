const createUser = require('../services/CreateUser')

async function handleCreateUser(req, res){
    try{
        const {name, email, password} = req.body;
        const user = await createUser(name, email, password);
        res.send(`User created! ${user}`);
    }catch(error){
        console.error(`Something went wrong! ${error}`)
    }
}

module.exports =  handleCreateUser;