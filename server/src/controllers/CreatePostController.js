const createPost = require('../services/CreatePost');

async function handleCreatePost(req, res){
    try{
        const {url, description, authorId} = req.body;
        const post = await createPost(url, description, authorId);
        res.send(`Post created! ${post}`);
     }catch(error){
        console.error('Something went wrong!' + error)
    }
}

module.exports = handleCreatePost;