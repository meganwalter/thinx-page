var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app'));

app.listen(PORT, function () {
  console.log('Express Server Started on port ' + PORT);
});
