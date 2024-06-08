const express = require('express')
const route = express.Router()
const {getUsers,getUser, createUser,updateUser,deleteUser} = require('../controllers/controller')

//route to get all the users
route.get('/', getUsers)

//route to get a single user by  the user id
route.get('/:id', getUser)

//route to create a user
route.post('/', createUser)

//route to update a user details
route.put('/:id', updateUser)

//route to delete a user 
route.delete('/:id', deleteUser)

module.exports = route