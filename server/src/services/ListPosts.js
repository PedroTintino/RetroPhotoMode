const prismaClient = require('../index');

async function listPosts(authorId){
    const posts = await prismaClient.image.findMany({
        where: {
            authorId: authorId
        }
    });
    return posts;
}

module.exports = listPosts;