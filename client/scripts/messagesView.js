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

























// ORIGINAL RENDERMESSAGE

// Call MessageView.render (uses Underscore templating system)
    //chats.append(window.MessageView.render(message));
    // We originall chat.append here, and tests pass but we want to move that logic into initialize or render
    // return window.MessageView.render(message);



// ORIGINAL RENDER

// var messageKey = Object.keys(Messages._data);
//     var values = Object.values(Messages._data);
//     var messages = Messages._data;
//     console.log('VALUES', values);

//     //this is what we were doing last
//     //template is populating, but we cannot append to the DOM
//     for (var i = 0; i < values.length; i++) {
//       for (var j = 0; j < values[i].length; j++) {
//         console.log('CURRENT MSG', MessagesView.renderMessage(values[i][j]));
//         chats.append(MessagesView.renderMessage(values[i][j]));
//       }
//       // console.log('MESSAGE', messages[index]);
//       // console.log('SATIERNS', MessagesView.renderMessage(messages._data[i]));
//     }
//     console.log('CHATS', chats);