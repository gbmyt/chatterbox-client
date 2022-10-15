// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    //MessagesView.render();
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
    $('#refresh').click(MessagesView.handleRefresh);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    var values = Object.values(Messages._data);

    values.forEach(messages => {
      messages.forEach(msg => {
        MessagesView.renderMessage(msg);
      });
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $messages = MessageView.render(message);
    MessagesView.$chats.append($messages);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.target.innerHTML);

    if (Friends.isFriend(event.target.innerHTML)) {
      $(event.target).css({ 'color': 'blue' });
    } else {
      $(event.target).css({ 'color': '' });
    }
  },

  handleRefresh: function (event) {
    MessagesView.$chats.empty();
    MessagesView.render();
  }
};