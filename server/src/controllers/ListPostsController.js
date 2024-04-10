const listPosts = require('../services/ListPosts');

async function handleListPosts(req, res){
    const authorId = req.query.authorId;
    const posts = await listPosts(authorId);
    res.send(posts);
}

module.exports = handleListPosts;

