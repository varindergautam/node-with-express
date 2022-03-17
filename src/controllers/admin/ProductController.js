const Product = require('../../../models/Product');

const createProduct = async (req, res) => {
    const title = "Create Product";
    res.render('admin/product/create_product', {title});
}

const saveProduct = async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const description = req.body.description;
    const short_description = req.body.short_description;
    const featured_image = imagePathurl+req.file.featured_image;

    await Product.create(
    {
        name,
        price,
        quantity,
        description,
        short_description,
        featured_image,
        status : 1,
        user_id : req.userData.userId
    }
    ).catch(error => console.log(error));
    
    res.redirect(nodeAdminUrl + '/product');
}

const listProduct = async (req, res) => {
    const userId = req.userData.userId;
    const products = await Product.findAll({
        where:{
            user_id: userId
        },
        raw:true
    }).catch(error=>console.log(error));
    const title = "Product List";
    // console.log(products);
    await res.render('admin/product/list_product', {products, title});
}

const editProduct = async (req, res) => {
    const {id} = await req.params;
    const userId = req.userData.userId;
    const product = await Product.findOne({
        where:{
            id: id
        },
        raw:true
    }).catch(error => console.log(error));
    const title = "Edit Product";
    // console.log(Product);
    await res.render('admin/product/create_product', {product, title, userId});
}

const updateProduct = async (req, res) => {
    console.log(imagePathurl+req.file);
    const {id} = req.params;
    const data = req.body;
    data.profile_pic = imagePathurl+req.file.filename;
    console.log(data);
    const selector = {where:{id:id}};
    
    let update = await Product.update(data, selector).catch(error => console.log(error));
    console.log(update);
    res.redirect(nodeAdminUrl + '/product');
}

const deleteProduct = async (req, res) => {
    const {id} = await req.params;
    await Product.destroy({
        where:{
            id: id
        },
        raw:true
    }).catch(error => console.log(error));

    res.redirect(nodeAdminUrl + '/product');
}

module.exports = {
    createProduct,
    saveProduct,
    listProduct,
    editProduct,
    updateProduct,
    deleteProduct
}