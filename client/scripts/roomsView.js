// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    var rooms = Object.keys(Rooms._data);

    //check render for already existing rooms
    rooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    var render = _.template(`<option value="<%-roomname%>">
      <%-roomname%>
    </option>`);
    var room = render({roomname: roomname});
    RoomsView.$select.append(room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    MessagesView.$chats.empty();

    // Messages._data is an object, with keys that have arrays as values
    var msgs = Object.values(Messages._data);

    var filtered = msgs.map((messages) => {
      return messages.filter((msg) => {
        return msg.roomname === $('select').val();
      });
    });

    for (var key of filtered) {
      if (key.length > 0) {
        for (var message of key) {
          MessagesView.renderMessage(message);
        }
      }
    }
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    var roomname = prompt('New Room Name:');
    Rooms.add(roomname);
    RoomsView.$select.empty();
    RoomsView.render();
  }
};