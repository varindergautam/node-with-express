// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const toastr = require('toastify-js');
const app = express();

const port = process.env.PORT || 5000;

// parsing the incoming data
app.use(express.urlencoded({extended:true}));

//serving public file
app.use(express.static(__dirname + '/public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(session({
    secret:'geeksforgeeks',
    saveUninitialized: 0,
    resave: 0,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// If you set resave to true,then for each request your session-cookie will be reset each time.

app.use(flash());

global.nodeAdminUrl = 'http://localhost:5000/admin';

const adminUserRouter = require('./src/routes/admin/UserRoutes');
const adminDashboardRouter = require('./src/routes/admin/DashboardRoute');
const adminCategoryRouter = require('./src/routes/admin/CategoryRoute');

app.use('/admin', adminUserRouter);
app.use('/admin/dashboard', adminDashboardRouter);
app.use('/admin/category', adminCategoryRouter);


const apiUserRouter = require('./src/routes/api/UserRoute');
app.use('/api/user', adminUserRouter);

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.json({'name' : 'varinder'});
})

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});