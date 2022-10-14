// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick)
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = Object.keys(Rooms._data);
    // console.log('HEY CHECK HERE', rooms);
    //check render for already existing rooms
    rooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // var newRoom = $(`<option value="roomname">${roomname}</option>`);
    // RoomsView.$select.append(newRoom);

    var render = _.template(`<option value="<%-roomname%>">
      <%-roomname%>
    </option>`);
    var room = render({roomname: roomname});
    RoomsView.$select.append(room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    // event.preventDefault();
    // Only runs on second call to .change()
    RoomsView.$select.change((e) => {
      $('body').css({ 'background-color': '#000' });
      //console.log('======>', e.target.value);

      // filter messages somehow
      // filter by e.target.value truthy
      // Messages._data is an object, with keys that have arrays as values
      var msgs = Object.values(Messages._data);
      // console.log('Messages', Messages._data);

      var filtered = msgs.map((messages) => {
        return messages.filter((msg) => {
          console.log('Message', msg.roomname === RoomsView.$select.val());
          return msg.roomname === RoomsView.$select.val();
        });
      });
      console.log('FILTERED', filtered, 'Rooms Select Val', RoomsView.$select.val());
    });
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    console.log('clicked');
    var roomname = prompt('New Room Name:');
    console.log(roomname);
    Rooms.add(roomname)
  }

};







// var filtered = msgs.filter(messages => {
//   // msgs.roomname = room;

//   for (var msg of messages) {
//     console.log(msg.roomname === RoomsView.$select.val());
//     if (msg.roomname === RoomsView.$select.value) {
//       return msg;
//     }
//     //return msg.roomname === RoomsView.$select.val();
//   }
// });
