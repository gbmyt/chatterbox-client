// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// TODO: Define how you want to store your messages.
var Messages = {
  //message and friends can house helper function that we can use for the other object methods

  // Maybe _data is an object {} with user keys that house user messages (array of messages?)
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // we need to see how the messages interact with the DOM using the escape methods

  // Possible Methods: create, edit, delete, render?, get?
  set: function(message) {
    // Add message to Messages._data
    // console.log('BEFORE', message);

    if (Messages._data[message.username] === undefined) {
      Messages._data[message.username] = [message];
    } else {
      Messages._data[message.username].push(message);
    }
    // console.log('AFTER PUSH', Messages._data);
  },

  get: function(username) {
    return Messages._data[username];
  }
};


// {
//   "shawndrost": [
//   {
//     text: "This is a message",
//     created_at: /* date */
//   },
//   ],
//   "anotheruser": [
//     {
//       text: "Message",
//       created_at:
//     },
//     {
//       text: "Another message",
//       created_at:
//     }
//   ]
// }