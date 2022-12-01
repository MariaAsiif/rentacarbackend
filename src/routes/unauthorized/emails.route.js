/**
 * Created by Jamshaid
 */
 
const express = require('express')
const router = express.Router()

const controller = require('../../controllers').emails


router.post('/carRentRequest', controller.carRentRequest)
router.post('/contactUs', controller.contactUs)


module.exports = router;
