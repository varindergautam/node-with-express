// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080


const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

const userRouter = require('./src/routes/UserRoutes');
app.use('/', userRouter);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })



app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});