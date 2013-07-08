var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!);
    var content = fs.readFileSync("./index.html");
    var buffer = new Buffer(content, "utf-8");
    response.send(buffer.toString("utf-8", 0, buffer.length));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
