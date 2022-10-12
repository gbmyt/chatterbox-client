// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    // Call MessagesView.render() to render all messages to screen
  },

  render: function() {
    // TODO: Render _all_ the messages.

    // Create html template
    // Populate template with user data (messages)
    // Append to selected $chats jQuery element
    console.log(MessagesView.$chats.html(''));

    // Call MessagesView.renderMessage on each message
  },

  renderMessage: function(message, chats = MessagesView.$chats) {
    // TODO: Render a single message.
    // Call MessageView.render (uses Underscore templating system)

    // chats.append('<p>This is some text</p>');
    chats.append(window.MessageView.render(message));
    // console.log('chats', chats[0].innerHTML);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};