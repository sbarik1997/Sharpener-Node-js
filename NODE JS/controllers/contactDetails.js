const path = require('path');

const rootDir = require('../utils/path');

exports.contactPage =  (req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'contactUs.html'));
};

exports.successPage =  (req,res) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};