// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.fetch(RoomsView.render);
    App.fetch(MessagesView.render);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('Server Log:', data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      for (var message of data) {
        Rooms.add(message.roomname);
        Messages.set(message);
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

// form doesn't clear on submit
// we render the same messages multiples times in #chats
// messages don't sort from newest to oldest
// If you're in a room that isn't 'all' and you hit refresh, we render "all" messages
// When App initializes, chats div should render "lobby" messages only