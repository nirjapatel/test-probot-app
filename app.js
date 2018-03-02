var msg = 'Hello World';
//console.log(msg);

var http = require('http');

module.exports = robot => {
    robot.on('issues.opened', async context => {
      // A new issue was opened, what should we do with it?
     
      const params = context.issue({body: 'Hello World!'})
      msg = context.payload;
      // Post a comment on the issue
      return context.github.issues.createComment(params)
  
    })
}

function onRequest(request, response){
   response.writeHead(200, {'Content-Type':'text/plain'});
   response.write(msg);
   response.end();
}



http.createServer(onRequest).listen(8000);
