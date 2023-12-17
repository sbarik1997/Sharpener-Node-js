const express = require('express');

const router = express.Router();

const contactController = require('../controllers/contactDetails');

router.get('/contactus',contactController.contactPage);

router.post('/success', contactController.successPage);


module.exports = router;