io.on('connection' , (socket)=>{
	socket.on('newUser' , (id)=>{
		socket.join('/');
		socket.to('/').broadcast.emit("userJoined" , id);
	});
});

navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
    }).then((stream)=>{
    
        
    }).catch(err=>{
        alert(err.message)
    })

    socket.on('userJoined' , id=>{
        console.log("new user joined")
        
               const call = peer.call(id , myVideoStream);
        const vid = document.createElement('video');
        call.on('error' , (err)=>{
            alert(err);
        })
        
       
       call.on('stream' , userStream=>{
        
           
            addVideo(vid , userStream);
        })
        peer.on('call' , call=>{

           
            call.answer(stream); 
                const vid = document.createElement('video');
        
            
            call.on('stream' , userStream=>{
                addVideo(vid , userStream);
            })
            call.on('error' , (err)=>{
                alert(err)
            })
        })
    });                