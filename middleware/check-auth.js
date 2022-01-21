const jwt = require('jsonwebtoken');
function checkAuth(req, res, next){
    try{
        // console.log('cionsole');     

        //get token from admin
        var token = req.session.user_token;

        // console.log(token);

        //get token from api
        // const token = req.headers.authorization.split(" ")[1];
  
        const decodeToken = jwt.verify(token, "secret");
        req.userData = decodeToken;
        console.log(req.userData);
        next();
    }catch(e){

        //for admin
        return res.redirect(nodeAdminUrl);

        //for api
        // return res.status(200).json({
        //     'status' : 0,
        //     'message' : 'Invalid or expired token provided',
        //     'error': e
        // });
    }
}

module.exports = {
    checkAuth : checkAuth
}