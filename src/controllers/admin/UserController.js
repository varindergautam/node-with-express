const User = require('../../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { status } = require('express/lib/response');
const saltRounds = 10;

const adminProfile = async(req, res) => {
    const title = "Admin Profile";
    const adminData = await User.findOne({
        where:{
            id: req.userData.userId
        },
        raw:true
    }).catch(error => console.log(error));
    res.render('admin/profile', {adminData, title});
}

const userLoginForm = async (req, res) => {
    const title = "Login Form";
    res.render('admin/login', {title});
}

const adminProfileUpdate = async (req, res) => {
    console.log(imagePathurl+req.file.filename);
    var imagePath = req.file.path;
    console.log(imagePath.replace(new RegExp(""),"/"));
    const {id} = await req.params;
    const data = req.body;
    data.profile_pic = imagePathurl+req.file.filename;

    // console.log(data);
    const selector = {where:{id: id}};
  
    let update = await User.update(data, selector).catch(error => console.log(error));
    res.redirect(nodeAdminUrl + '/profile');
}

const userLogin = async (req, res) => {
    const {email, password} = await req.body;
    
    User.findOne({where:{email:email}}).then(user => {
        if(user === null){
            req.session.message = 'Invalid password credentials!';
            res.redirect('/');
            // res.status(200).json({
            //     status: 0,
            //     message : 'Invalid credentials!',
            // });
        }else{
            bcrypt.compare(password, user.password, function(err, result){
                console.log(result);
                if(result){
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, "secret", function(err, token)
                    {
                        // res.status(200).json({
                        //     status: 1,
                        //     message : 'Success',
                        //     token: token,
                        //     user: user
                        // });
                        var data = {
                            status: 1,
                            message : 'Success',
                            token: token,
                            user: user
                        };
                       
                    
                    //  var tk = data.token;
                    //  export {tk};
                        // console.log(data.token);

                        req.flash('user_token', data.token);

                        req.flash('message', 'Success!!');
                        req.session.message = 'please login first';
                        req.session.user_token = data.token;
                        res.redirect(nodeAdminUrl + '/dashboard');
                    });

                    
                }
                else{
                    const title = "Login Form";
                    message = 'Invalid password credentials!';
                    res.render('admin/login', { message, title });
                    // res.status(200).json({
                    //     status: 0,
                    //     message : 'Invalid password credentials!',
                    // });
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

const userLogout = async (req, res) => {
    req.flash('logut_message', 'Logout Success!!');
    // req.session.destroy();
    res.clearCookie('session');
    res.redirect(nodeAdminUrl);
}

module.exports = {
    userLoginForm,
    userLogin,
    userSignUpForm,
    saveSignUpUser,
    userLogout,
    adminProfile,
    adminProfileUpdate
}



