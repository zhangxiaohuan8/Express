var express = require('express');
var router = express.Router();
var data =require('./data.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("login");
});
router.post('/list',function(req,res,next){
// console.log(req.body);
// console.log(data.users[0]);
var username=req.body.username;
var pwd=req.body.pwd;
console.log(username);
console.log(pwd);
if(data.users[0].username==username&&data.users[0].password==pwd){
  res.render("list",{chapterList:data.chapterList});
}
else{
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
  res.write("用户名、密码错误。");
  res.end();
}
})
module.exports = router;
