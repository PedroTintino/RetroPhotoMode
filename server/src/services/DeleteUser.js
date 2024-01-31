const prismaClient = require('../index');

async function deleteUser(id){
  
    if(!id){
        throw new Error('Id is missing!')
    }

    const findUser = await prismaClient.user.findFirst({
        where:{
            id: id
        }
    })

    if(!findUser){
        throw new Error('User does not exist!')
    }

    const userDeleted = await prismaClient.user.delete({
        where:{
            id: findUser.id
        }
    })

    console.log(userDeleted)

    return { message: "User Deleted!" };
}
module.exports = deleteUser;