const express = require('express');
const router = express.Router();
const checkAuthMiddleware = require('../../../middleware/check-auth');
const imageUploader = require('../../../helpers/image-uploader');
const { createProduct, saveProduct, listProduct, editProduct, updateProduct, deleteProduct } = 
require('../../controllers/admin/ProductController');

router.get('/', checkAuthMiddleware.checkAuth, listProduct);
router.get('/create', checkAuthMiddleware.checkAuth, createProduct);
router.post('/create', checkAuthMiddleware.checkAuth, imageUploader.upload.single('featured_image'), saveProduct);
router.get('/edit/:id', checkAuthMiddleware.checkAuth, editProduct);
router.post('/edit/:id', checkAuthMiddleware.checkAuth, imageUploader.upload.single('featured_image'), updateProduct);
router.get('/delete/:id', checkAuthMiddleware.checkAuth, deleteProduct);

module.exports = router;