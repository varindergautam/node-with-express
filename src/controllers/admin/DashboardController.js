const Category = require('../../../models/Category');

const dashboard = async (req, res) => {
    const userId = req.userData.userId;
    const title = "Dashboard";
    // res.send(req.session.user_token);
    // res.send(req.userData);
    var category = await Category.count({
        where:{
            user_id: req.userData.userId
        },
        raw:true
        }).catch(error => console.log(error));;
    console.log(category + 'dfffff');
    var message = req.session.message;
    res.render('admin/dashboard/dashboard', {title, message, category});
}

module.exports = {
    dashboard
}