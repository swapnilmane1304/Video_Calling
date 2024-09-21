
const express = require('express'); 
const app = express(); 

app.set("view engine", "ejs"); 

app.use(express.static("public")); 

app.get("/" , (req,res)=>{
res.send("Welcome to GeeksforGeeks Video Call App"); 
});


app.listen(4000 , ()=>{
	console.log("Server running on port 4000");
})

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4000 , ()=>{
	console.log("Server running on port 4000");
});
