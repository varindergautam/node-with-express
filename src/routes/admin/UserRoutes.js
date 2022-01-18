const express = require('express');
const router = express.Router();
const { userLoginForm, userLogin, userSignUpForm, saveSignUpUser, userLogout} = require('../../controllers/admin/UserController');

router.get('/', userLoginForm);
router.post('/login', userLogin);
router.get('/register', userSignUpForm);
router.post('/register', saveSignUpUser);
router.get('/logout', userLogout);


module.exports = router;