const authUser = require('../services/AuthUser');
const jwt = require('jsonwebtoken');

async function handleAuthUser(req, res){
   try{ 
    const{ email, password } = req.body;
    const user = await authUser(email, password);

    const secret = process.env.SECRET;

    // jwt auth
    const token = jwt.sign({
        id: user
    }, secret)
    return res.json({ message: 'User found!', token })
    
} catch(error){
    console.log(error)
    res.status(422).json({ message: 'Invalid email or password!' })
}
}
module.exports = handleAuthUser;