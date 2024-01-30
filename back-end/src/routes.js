const express = require('express');
const route = express.Router();
const handleCreateUser = require('./controllers/CreateUserController');
const handleListUsers = require('./controllers/ListUsersController');
const handleDeleteUser = require('./controllers/DeleteUserController');
const handleAuthUser = require('./controllers/AuthUserController');

// Test Public Route
route.get('/', (req, res) => {
    res.json({ Message: 'Wellcome!' })
})

route.get('/user/list', handleListUsers)

route.post('/user/create', handleCreateUser)

route.delete('/user/delete/:userId', handleDeleteUser)

route.post('/login', handleAuthUser)
module.exports = route;