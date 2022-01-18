const User = require('../../models/User');
const bcryptjs = require('bcrypt');
const jwt = require('jsonwebtoken');

function signUp(req, res){
    models.User.findOne({where:{email:req.body.email}}).then(result => {
        if(result)
        {
            res.status(200).json({
                status: 0,
                message : 'Email already exists'
            });
        }
        else
        {
            bcryptjs.genSalt(10, function(err, salt){
                bcryptjs.hash(req.body.password, salt, function(err, hash)
                {
                    const user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }
                
                    models.User.create(user).then(result => {
                        res.status(200).json({
                            message: "User created succesfully",
                            post: result
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Something went wrong",
                            error: error
                        });
                    });
                });
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });    
}

function login(req, res){
    models.User.findOne({where:{email:req.body.email}}).then(user => {
        if(user === null){
            res.status(200).json({
                status: 0,
                message : 'Invalid credentials!',
            });
        }else{
            bcryptjs.compare(req.body.password, user.password, function(err, result){
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, "secret", function(err, token)
                    {
                        res.status(200).json({
                            status: 1,
                            message : 'Success',
                            token: token,
                            user: user
                        });
                    });
                }
                else{
                    res.status(200).json({
                        status: 0,
                        message : 'Invalid credentials!',
                    });
                }
            });
        }
    }).catch(error => {

    });
}

module.exports = {
    signUp: signUp,
    login: login
}