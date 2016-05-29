/*var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':"text/plain"});
	res.end('hello world\n');
}).listen(1337,'127.0.0.1');
console.log("程序已经启动");*/
/*http服务只做两件事情：处理HTTP请求和发送HTTP相应
请求报文和相应报文，报文内容分两个部分：报文头和报文体
curl -v http://127.0.0.1:1337
在>和<之间是报文头，因为是get请求没有报文体
相应报文中的hello  world即是报文体*/
/*var net=require('net');
var server=net.createServer(function(socket){
	socket.on('data',function(data){
		socket.write('你好');
	})
	socket.on('end',function(){
		console.log('链接断开');
	})
	socket.write("欢迎来到nodejs");
})	
server.listen(8214,function(){
	console.log('server bound');
})*/
/*server.listen不仅可以监听端口号，还可以监听Domain Socket进行监听*/
/*var dgram=require('dgram');
var server=dgram.createSocket('udp4');
server.on('message',function(msg,rinfo){
	console.log("server got:" +msg+"form"+rinfo.address+":"+rinfo.port);
})
server.on("listening",function(){
	var address=server.address();
	console.log("server listening"+address.address + ":" +address.port);
})
server.bind(41234);*/

/*var dgram =require("dgram");
var message =new Buffer('深入浅出Node.js');
var client=dgram.createSocket("udp4");
client.send(message,0,message.length,41234,"localhost",function(err,bytes){
	client.close();
})*/
var counter1 = require('./util/counter');
var counter2 = require('./util/counter');

console.log(counter1.count());
console.log(counter2.count());
console.log(counter2.count());
