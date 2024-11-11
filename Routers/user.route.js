const express = require('express');
const router = express.Router();
const { handleUserDataSave, handlefetchUserData } = require('../controllers/users.controller')

router.post('/', handleUserDataSave)

router.get('/:namechar', handlefetchUserData)

module.exports = router