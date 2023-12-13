const express = require('express');

const router = express.Router();

const path = require('path');

const rootDir = require('../utils/path');


router.get('/contactus', (req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
});

router.post('/success', (req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
})


module.exports = router;
