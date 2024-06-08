const db = require('../models/models')

const getUsers = async(req, res) => {
  try {
    const users = await db.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

const getUser = async(req,res) => {
  try {
    const id = req.params.id
    const userid = await db.findById(id)
    if(!userid){
      res.status(404).json({message: "user not found"})
    }
    res.status(200).json(userid)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}
const createUser =async(req,res) => {
  try {
    const users = await db.create(req.body)
    res.status(200).json(users)
   } catch (error) {
    res.status(500).json({message: error.message})
   }
}

const updateUser = async(req,res) => {
  try {
    const id = req.params.id
    const update =await db.findByIdAndUpdate(id, req.body)
    if(!update){
      return res.status(404).json({message:"user not founc"})
    }
    const userid = await user.findById(id)
    res.status(200).json(userid)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

const deleteUser = async(req,res) => {
  try {
    const id = req.params.id

    const del = await db.findByIdAndDelete(id)
    if(!del){
      return res.status(404).json({message:"user not founc"})
    }
    res.status(200).json({message: "user deleted successfully"})
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}