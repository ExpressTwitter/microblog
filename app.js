var express = require('express');
var app = express();
app.locals.users = [];
var body-parser = 

app.get('/', function (req, res) {
  res.sendfile('/Users/kathleen/myapp/microblog/login.html');
});

app.post('/login', function (req, res) {
	var username = req.params.user;
	req.app.locals.users.push(username);
	console.log(username)
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});