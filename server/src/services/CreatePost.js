const prismaClient = require('../index');

async function createPost(url, description, authorId){
    if(!url || !description){
        throw new Error('Missing params!');
    }

    const post = await prismaClient.image.create({
        data:{
            url,
            description,
            // alteração feita de madrugada com sono
            authorId
        }
    })

    return post;
}

module.exports = createPost;