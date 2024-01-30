const prismaClient = require('../index');

async function authUser(email, password){
    if(!email || !password){
        throw new Error('Missing params!')
    }

    const user = await prismaClient.user.findUnique({
        where:{
            email: email
        }
    })

    if(!user || !user.password){
        throw new Error('Invalid email or password!')
    }

    return user;
}

module.exports = authUser;