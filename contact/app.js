

var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var path = require('path');

app.use( bodyParser.json() );    

var urlencodedParser=bodyParser.urlencoded({  
  extended: true
}); 

mongoose.connect('mongodb://localhost/contact');
var db=mongoose.connection;



app.use(express.static(path.join(__dirname, 'public')));



var routeSetter=require('./routes/contact_route.js')(app);
 
app.listen(3000, function() {
    console.log('Listening to port:  ' + 3000);
});



