const dashboard = async (req, res) => {
    const title = "Dashboard";
    // res.send(req.session.user_token);
    // res.send(req.userData);

    var message = req.session.message;
    res.render('admin/dashboard/dashboard', {title, message});
}

module.exports = {
    dashboard
}