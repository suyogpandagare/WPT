

const express = require('express');  //express ko import karo and express is alias
const path = require('path');  //importing path

let app = express()

//We help the express server to redirect to the routemodule1.js
//when any request of type /book occurs
var bookroutes = require('./routemodule1.js');
app.use(express.json());  //ta ke web server ko json me parsing krna hai
app.use('/book',bookroutes);  //jabbhi /book aaiye bookroutes me jao

var mathroutes = require('./routemodule2.js');
app.use('/math',mathroutes);

app.set('views','./views');
app.set('view engine','hbs');

//server runs continuoulsy waiting for request on port 5000
app.get('/',(request,response)=> {
    return response.send('Welcome to the express web server');
});

//one more request mapping
app.get('/data',(req,resp)=> {
    return resp.send({"name":"Suyog","gender":"male"});
});

//server runs continuously on port 5000
app.listen(5000,()=>{
    console.log('App is listening on port 5000')
});

app.get('/greet/:uname',(req,resp)=> {
    let user1 = req.params.uname
    resp.render('greet',{user:user1})
});