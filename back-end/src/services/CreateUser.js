const prismaClient = require('../index');

async function createUser(name, email, password){
    if(!name || !email || !password){
        throw new Error('Missing params!')
    }

    const userAlreadyExists = await prismaClient.user.findUnique({
        where:{
            email: email
        }
    })

    if(userAlreadyExists){
        throw new Error('Email already in use!')
    }

    const user = await prismaClient.user.create({
        data:{
            name,
            email,
            password
        }
    })
    return user;
}
module.exports = createUser;