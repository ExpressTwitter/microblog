var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var url = require('url');
app.locals.users = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', function (req, res) {
  res.sendfile('/Users/kathleen/myapp/microblog/login.html');
});

// app.post('/login/:user', function (req, res) {
// 	var username = req.params.user;
// 	req.app.locals.users.push(username);
// 	//res.end();
// 	//console.log(username)
// })

app.post('/login', function (req, res){	
	//console.log(req)
	console.log(req.body)
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});