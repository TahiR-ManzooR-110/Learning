//  the 'http' module is a built-in module in Node.js that provides functionality to create an HTTP server.

var http = require("http");

// The createServer method is used to create an HTTP server. It takes a callback 
// function as an argument. This function will be invoked whenever a request is made to the server.
// The callback function takes two parameters: req (request) and res (response). req represents 
// the incoming HTTP request, and res is used to send a response back to the client.

http
  .createServer(function (req, res) {

    // The writeHead method is used to set the HTTP response header. In this case, it sets the status 
    // code to 200 (OK) and specifies that the content type is HTML.
    res.writeHead(200, { "Content-Type": "text/html" });

    // The end method is used to send the response back to the client. In this example, 
    // it sends the string 'Hello World!' as the response.
    res.end('Hello World!');
  })
  .listen(8080);
// The listen method specifies the port on which the server will listen for incoming requests. In this case, it's set to port 8080.
