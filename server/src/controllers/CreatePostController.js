const createPost = require('../services/CreatePost');

async function handleCreatePost(req, res){
    try{
        const {url, description, author} = req.body;
        const post = await createPost(url, description, author);
        res.send(`Post created! ${post}`);
     }catch(error){
        console.error('Something went wrong!' + error)
    }
}

module.exports = handleCreatePost;