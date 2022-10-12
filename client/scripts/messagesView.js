// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    MessagesView.render();
    // Call MessagesView.render() to render all messages to screen
    //chats.append(MessagesView.render());
  },

  render: function(chats = MessagesView.$chats) {
    // TODO: Render _all_ the messages.
    // Call MessagesView.renderMessage on each message
    var messageKey = Object.keys(Messages._data);
    var values = Object.values(Messages._data);
    var messages = Messages._data;
    console.log('VALUES', values);

    //this is what we were doing last
    //template is populating, but we cannot append to the DOM
    for (var i = 0; i < values.length; i++) {
      for (var j = 0; j < values[i].length; j++) {
        console.log('CURRENT MSG', MessagesView.renderMessage(values[i][j]));
        chats.append(MessagesView.renderMessage(values[i][j]));
      }
      // console.log('MESSAGE', messages[index]);
      // console.log('SATIERNS', MessagesView.renderMessage(messages._data[i]));
    }
    console.log('CHATS', chats);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    // Call MessageView.render (uses Underscore templating system)
    //chats.append(window.MessageView.render(message));
    // We originall chat.append here, and tests pass but we want to move that logic into initialize or render
    return window.MessageView.render(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};