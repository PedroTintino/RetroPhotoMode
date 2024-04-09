const listPosts = require('../services/ListPosts');

async function handleListPosts(req, res){
    const posts = await listPosts();
    res.send(posts);
}

module.exports = handleListPosts;

