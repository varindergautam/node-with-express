const express = require('express');
const router = express.Router();
const checkAuthMiddleware = require('../../../middleware/check-auth');
const { createCategory, saveCategory, listCategory, editCategory, updateCategory, deleteCategory } = require('../../controllers/admin/CategoryController');

router.get('/', checkAuthMiddleware.checkAuth, listCategory);
router.get('/create', createCategory);
router.post('/create', saveCategory);
router.get('/edit/:id', editCategory);
router.post('/edit/:id', updateCategory);
router.get('/delete/:id', deleteCategory);

module.exports = router;