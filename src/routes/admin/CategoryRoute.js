const express = require('express');
const router = express.Router();
const checkAuthMiddleware = require('../../../middleware/check-auth');
const { createCategory, saveCategory, listCategory, editCategory, updateCategory, deleteCategory } = require('../../controllers/admin/CategoryController');

router.get('/', checkAuthMiddleware.checkAuth, listCategory);
router.get('/create', checkAuthMiddleware.checkAuth, createCategory);
router.post('/create', checkAuthMiddleware.checkAuth, saveCategory);
router.get('/edit/:id', checkAuthMiddleware.checkAuth, editCategory);
router.post('/edit/:id', checkAuthMiddleware.checkAuth, updateCategory);
router.get('/delete/:id', checkAuthMiddleware.checkAuth, deleteCategory);

module.exports = router;