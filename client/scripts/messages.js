// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

// Define how you want to store your messages.
var Messages = {
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  set: function(message) {
    if (Messages._data[message.username] === undefined) {
      Messages._data[message.username] = [message];
    } else {
      Messages._data[message.username].push(message);
    }
    return Messages._data;
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