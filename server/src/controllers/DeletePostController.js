
const deletePost = require('../services/DeletePost');

async function handleDeletePost(req, res){
   try{
        const postId = req.params.postId;  

        if (!postId) {
         return res.status(400).json({ error: 'ID da postagem não fornecido na solicitação!' });
     }

        const deletedPost = await deletePost(postId);
        res.send(`post ${postId} deleted!`)
   }
   catch(error){
      console.error('Error while deleting post ' + error);
      res.status(500).send('Internal server error');
   }
}
module.exports = handleDeletePost;