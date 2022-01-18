const express = require('express');
const router = express.Router();
const checkAuthMiddleware = require('../../../middleware/check-auth');
const { dashboard } = require('../../controllers/admin/DashboardController');

router.get('/', checkAuthMiddleware.checkAuth, dashboard);
// router.get('/', dashboard);

module.exports = router;