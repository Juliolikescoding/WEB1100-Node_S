// creates an object for the express module
const express = require('express');
//helps setup your path system
const path = require('path');
// creating routes
const routes = require('./routes')
//runs the express module
const app = express();

//setting my view engine, where you tell the server which version of your control that youre going to use
app.set('view engine', 'ejs');

//this create a static file server that allows clients to download individual files needed to run the application
app.use(express.static(path.join(__dirname,'public')));

// home route 
app.get('/', routes.home);
// about route
app.get('/about', routes.about);
//set up listener
app.listen(3000, () => console.log('app listening on port 3000'))