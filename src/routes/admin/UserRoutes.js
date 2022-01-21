const express = require('express');
const router = express.Router();
const checkAuthMiddleware = require('../../../middleware/check-auth');
const imageUploader = require('../../../helpers/image-uploader');
const { userLoginForm,
        userLogin, 
        userSignUpForm, 
        saveSignUpUser, 
        userLogout, 
        adminProfile, 
        adminProfileUpdate} = require('../../controllers/admin/UserController');

router.get('/', userLoginForm);
router.post('/login', userLogin);
router.get('/register', userSignUpForm);
router.post('/register', saveSignUpUser);
router.get('/logout', userLogout);
router.get('/profile', checkAuthMiddleware.checkAuth, adminProfile);
router.post('/profile/:id', checkAuthMiddleware.checkAuth, imageUploader.upload.single('profile_pic'), adminProfileUpdate);
// router.post('/profile/:id', adminProfileUpdate);

module.exports = router;