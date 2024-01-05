const User = require('../models/user');

exports.addUser = (req, res, next) => {
    const name = req.body.appointName;
    const email = req.body.appointEmail;
    const phoneNumber = req.body.appointNumber;

    User.create({ name:name, email:email, phoneNumber:phoneNumber })
        .then((data) => {
            res.status(201).json({ userDetails: data });
        })
        .catch(err => {
            if (err.name === 'SequelizeValidationError') {
                // Handle validation errors
                const errors = err.errors.map(error => ({
                    message: error.message,
                    field: error.path
                }));
                res.status(400).json({ errors });
            } else {
                // Handle other types of errors
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            }
        });
};


exports.getUser = (req,res,next) => {
    User.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log(err))
};

exports.deleteUser = async (req,res,next) => {
    try{
        if(!req.params.id){
            return res.status(400).json({err: "Id is missing"});
        }
        const userId = req.params.id;
        await User.destroy({where:{id:userId}})
        res.status(200);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err})
    }
};