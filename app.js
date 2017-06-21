var express = require('express')
var app = express()
var path = require('path');

app.use('/static', express.static('public'));
app.use('/modules', express.static('node_modules'));

app.use(function (req, res, next) {
  console.log('Request:', req.url);
  next()
})
app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})