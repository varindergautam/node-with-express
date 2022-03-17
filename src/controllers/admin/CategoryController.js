const Category = require('../../../models/Category');

const createCategory = async (req, res) => {
    const title = "Create Category";
    res.render('admin/category/create_category', {title});
}

const saveCategory = async (req, res) => {
    const name = req.body.name;

    const category =  await Category.create(
    {
        name,
        status : 1,
        user_id : req.userData.userId
    }
    ).catch(error => console.log(error));
    
    res.redirect(nodeAdminUrl + '/category');
}

const listCategory = async (req, res) => {
    const userId = req.userData.userId;
    const categories = await Category.findAll({
        where:{
            user_id: userId
        },
        raw:true
    }).catch(error=>console.log(error));
    const title = "Category List";
    // console.log(categories);
    await res.render('admin/category/list_category', {categories, title});
}

const editCategory = async (req, res) => {
    const {id} = await req.params;
    const userId = req.userData.userId;
    const category = await Category.findOne({
        where:{
            id: id
        },
        raw:true
    }).catch(error => console.log(error));
    const title = "Edit Category";
    // console.log(category);
    await res.render('admin/category/create_category', {category, title, userId});
}

const updateCategory = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    console.log(data);
    const selector = {where:{id:id}};
    
    let update = await Category.update(data, selector).catch(error => console.log(error));
    console.log(update);
    res.redirect(nodeAdminUrl + '/category');
}

const deleteCategory = async (req, res) => {
    const {id} = await req.params;
    const category = await Category.destroy({
        where:{
            id: id
        },
        raw:true
    }).catch(error => console.log(error));

    res.redirect(nodeAdminUrl + '/category');
}

module.exports = {
    createCategory,
    saveCategory,
    listCategory,
    editCategory,
    updateCategory,
    deleteCategory
}