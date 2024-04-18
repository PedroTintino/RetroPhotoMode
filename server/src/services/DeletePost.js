const prismaClient = require('../index');

async function DeletePost(id){
    if(!id){
        throw new Error('Post id not found!')
    }
    const findPost = await prismaClient.image.findFirst({
        where: {
            id: id
        }
    })
    
    if(!findPost){
        throw new Error('Post not found!');
    }

    const deletedPost = await prismaClient.image.delete({
        where:{
            id: findPost.id
        }
    })
    
    return deletedPost;
}

module.exports = DeletePost;