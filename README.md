const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

// app.get('/',function(req,res){
//   let data = {
//     code:1,
//     message:'hello'
//   };
//   res.send(data);
// })
// app.get('/getuser',function(req,res){
//   fs.readFile(__dirname+'/userlist.json','utf8',function(err,data){
//     res.end(data);
//   });
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: '小k博客 (htmlk.cn)'});
});
router.get('/data',function(req,res){
  let data = {
    code:1,
    message:'hello'
  };
  res.send(data);
})
app.use('/', router);

var server = app.listen(9030,'localhost',function(){
  var host = server.address().address
  var port = server.address().port
  console.log('server running on http://%s:%s',host,port)
});
