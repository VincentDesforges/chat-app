const socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'secondUser',
  //   text: 'Whats up?'
  // });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('New message: ', message);
})


socket.emit('createMessage', {
  from: 'Frank',
  text: 'Hello'
}, function(data) {
  console.log('Got it!');
  console.log(data);
});
