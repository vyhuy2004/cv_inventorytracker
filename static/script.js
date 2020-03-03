$(document).ready(function(){
  var socket = io.connect('http://127.0.0.1:5000');

  socket.on('connect', function() {
      socket.send('I am now connected!');
      socket.emit('sending_event',{'id' : 500,
                                    'x' : 10,
                                    'y' : 5,
                                    'z' : 100})
  });

  socket.on('render_page', function(msg) {
      var id = msg.id;
      var x = msg.x;
      var y = msg.y;
      var z = msg.z;
      locstring = '';
      locstring = locstring + '<h2>ID: ' + id.toString() + ', X:' + x.toString()+ ', Y:' + y.toString()+ ', Z:' + z.toString() + '</h2>'
      $("#log").html(locstring);

  });

});