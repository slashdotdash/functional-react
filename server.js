var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    mime = require('mime');

if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function (str){
    return this.substring(0, str.length) === str;
  };
}

var serve404 = function(req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.write('404 Not Found\n');
  res.end();
};

var serveStaticFile = function(req, res) {
  var uri = url.parse(req.url).pathname,
      filename = path.join(process.cwd(), uri),
      type = mime.lookup(filename);
            
  res.writeHead(200, { 'Content-Type': type });

  fs.exists(filename, function(exists) {
    if (!exists) {
      return serve404(req, res);
    }
    
    fs.createReadStream(filename).pipe(res);
  });
};

var server = http.createServer(function(req, res) {
  if (req.url === '/') {
    return fs.createReadStream(path.join(process.cwd(), 'index.htm')).pipe(res);
  }

  serveStaticFile(req, res);
});

server.listen(3000, '127.0.0.1', function() {
  console.log('Server running at http://localhost:3000/');
});