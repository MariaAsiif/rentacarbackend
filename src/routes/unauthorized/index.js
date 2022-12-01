
 
const express = require('express');
const router = express.Router();

//get defined routes
const emailRoutes = require('./emails.route')



//call appropriate routes

//Un-restricted routes
router.use ('/emails', emailRoutes)

module.exports = router;
