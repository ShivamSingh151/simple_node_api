var http = require('http');
var data = '[{"topic":"GTL Infra"},{"topic":"Reliance"},{"topic":"TCS"}]';
http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
}).listen(8080);