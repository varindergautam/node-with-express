const express = require('express');
const usersController = require('../../controllers/api/UserController');

const router = express.Router();

router.post("/", usersController.signUp);
router.post("/login", usersController.login);

module.exports = router;