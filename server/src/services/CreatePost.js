const prismaClient = require('../index');

async function createPost(url, description){
    if(!url || !description){
        throw new Error('Missing params!');
    }

    const post = await prismaClient.image.create({
        data:{
            url,
            description
        }
    })

    return post;
}

module.exports = createPost;