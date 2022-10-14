// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // {
  //   "username": true/false (isFriend status)
  // }

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
  add: function(username) {
    Friends._data[username] = true;
  }, // add friend to _data

  toggleStatus: function(username) {
    if (!Friends._data[username]) {
      Friends.add(username);
    } else {
      Friends._data[username] = !Friends._data[username];
    }

  }, // change status

  isFriend: function(username) {
    return Friends._data[username];
  }, // checks friend status

};
































// toggle function here which would take in a user (based on a click event),
// check _data for if user exists,
// if not add to Friends._data and set value to true