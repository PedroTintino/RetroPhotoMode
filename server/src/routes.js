const express = require('express');
const route = express.Router();
const handleCreateUser = require('./controllers/CreateUserController');
const handleListUsers = require('./controllers/ListUsersController');
const handleDeleteUser = require('./controllers/DeleteUserController');
const handleAuthUser = require('./controllers/AuthUserController');
const handleCreatePost = require('./controllers/CreatePostController');
const handleListPosts = require('./controllers/ListPostsController');
const handleDeletePost = require('./controllers/DeletePostController');

// Test Public Route
route.get('/', (req, res) => {
    res.json({ Message: 'Wellcome!' })
})

route.get('/user/list', handleListUsers)

route.post('/user/create', handleCreateUser)

route.delete('/user/delete/:userId', handleDeleteUser)

route.post('/login', handleAuthUser)

route.get('/post/list', handleListPosts)

route.post('/post/create', handleCreatePost)

route.delete('/post/delete/:postId', handleDeletePost)

module.exports = route;