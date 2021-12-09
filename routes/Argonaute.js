const express = require('express');
const router = express.Router();
const {getArgo,postArgo} = require('../controllers/Argonaute')

 router.route('/').get(getArgo).post(postArgo); 
    
module.exports = router;