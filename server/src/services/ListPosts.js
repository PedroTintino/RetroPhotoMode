const prismaClient = require('../index');

async function listPosts(){
    const posts = await prismaClient.image.findMany();
    return posts;
}

module.exports = listPosts;