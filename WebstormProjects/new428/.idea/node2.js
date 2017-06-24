/**
 * Created by lui on 2017/5/24.
 */
var http=require("http");
http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end();
}).listen(8080);
