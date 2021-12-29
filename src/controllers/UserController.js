const User = require('../models/User');

const bcrypt = require('bcrypt');
const saltRounds = 10; 

const userLoginForm = async (req, res) => {
    const title = "Login Form";
    res.render('admin/login', {title});
}

const userLogin = async (req, res) => {
    const {email, password} = await req.body;
    console.log(email);
    User.findOne({where:{email:email}}).then(user => {
        if(user === null){
            res.status(200).json({
                status: 0,
                message : 'Invalid credentials!',
            });
        }else{
            bcrypt.compare(password, user.password, function(err, result){
                if(result){
                    const title = "Dashboard";
                    res.render('admin/dashboard/dashboard', {user, title});
                }
                else{
                    res.status(200).json({
                        status: 0,
                        message : 'Invalid password credentials!',
                    });
                }
            });
        }
    }).catch(error => {

    });
}

const userSignUpForm = async (req, res) => {
    const title = "Sign Up Form";
    res.render('admin/signup', {title});
}

const saveSignUpUser = async (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    let password = req.body.password;

    const salt = bcrypt.genSaltSync(saltRounds);
    password = bcrypt.hashSync(password, salt);

    const user =  User.create(
    {
        name,
        email,
        phone_number,
        password
    }
    ).catch(error => console.log(error));
    res.redirect('/');
}

module.exports = {
    userLoginForm,
    userLogin,
    userSignUpForm,
    saveSignUpUser
}