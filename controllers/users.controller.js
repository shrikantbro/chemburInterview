const mongoose = require('mongoose')
const User = require('../Models/users.model')
const createError = require('http-errors')

const handleUserDataSave = async(req, res, next) => {
    try {
        const { name } = req.body
        if(!name) throw createError.BadRequest()
            await User.create({
                name: name
            })
            res.status(201).json({message: 'User created!'})

    } catch (error) {
        console.log('Error occured in handleUserDataSave due to ',error.message);
        
    }
}

const handlefetchUserData = async(req, res) => {
    try {
        
        const namechar = req.params.namechar
        
        if(!namechar) throw createError.BadRequest()
        const userData = await User.find({ name: { 
            $regex: namechar, 
            $options: 'i' 
        }})
        console.log(userData);
        res.status(200).json({userList: userData})
    } catch (error) {
        console.log('Error occured in handlefetchUserData due to ',error.message);        
    }
}


module.exports = { handleUserDataSave, handlefetchUserData,}
