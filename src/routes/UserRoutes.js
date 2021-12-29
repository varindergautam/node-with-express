const express = require('express');
const router = express.Router();
const { userLoginForm, userLogin, userSignUpForm, saveSignUpUser} = require('../controllers/UserController');

router.get('/', userLoginForm);
router.post('/login', userLogin);
router.get('/register', userSignUpForm);
router.post('/register', saveSignUpUser);


module.exports = router;