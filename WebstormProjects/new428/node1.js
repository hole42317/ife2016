var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var html = '<html>'
        +'<head>'
        +'<title>nodejs</title><meta charset= utf-8>'
        +'</head>'
        +'<body>'
        +'<form method="post" action="1.txt" onsubmit="return sub();"><div id="login"><div id="userid"><span>名称</span><input id="idvalue"></div><div id="idnotice" style="position: absolute"><div id="idnotice1" style="display: none;color: green"><span>合法</span></div><div id="idnotice2" style="display: none;color: red"><span>非法字符串</span></div><div id="idnotice3" style="display: none;color: red"><span>空</span></div><div id="idnotice4" style="display: none;color: red"><span>长度不符合</span></div></div><div id="psw"><span>密码</span><input id="pswvalue" type="password" ></div><div id="pswnotice" style="position: absolute;"><div id="pswnotice1" style="display: none;color: green"><span>合法</span></div><div id="pswnotice2" style="display: none;color: red"><span>非法字符串</span></div><div id="pswnotice3" style="display: none;color: red"><span>请输入密码</span></div><div id="pswnotice4" style="display: none;color: red"><span>长度不符合</span></div></div><div id="psw2"><span>密码</span><input id="pswvalue2" type="password" style="position: absolute;"></div><div id="pswnotice-" style="position: absolute;"><div id="pswnotice12" style="display: none;color: green"><span>一致</span></div><div id="pswnotice22" style="display: none;color: red"><span>不一致</span></div><div id="pswnotice32" style="display: none;color: red"><span>请输入密码</span></div></div><input type="submit" value="提交" style="margin-top: 30px" id="su"></div></form>'
        +'<script src="29.js"></script>'
        +'</body>'
        +'</html>';
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write(html);
    response.end();
}).listen(8888);