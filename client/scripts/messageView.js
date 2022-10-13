// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

  // Format:
  // _.template(templateString, data?, settings?)
  render: _.template(`
    <div class="chat">
      <div class="username"><%-username%></div>
      <div><%-text%></div>
      <div><%-roomname%></div>
    </div>
  `)
};





























// Data can be inserted dynamically in three ways:

// ====================
// <%=interpolate%>
// ====================
// Insert the result of an expression. The properties of the data object are all available as variables (see property user, above). No escaping happens, values are inserted verbatim.

// ====================
// <%-escape%>                  <====== THIS IS WHAT WE WANT
// ====================
// Insert the result of an expression, but escape the following characters via _.escape():  & < > " ' /

// Example:
//     > _.template("Hello <%-user%>!", { user: "<Jane>" })
//     'Hello &lt;Jane&gt;!'

// ====================
// <%evaluate%>
// ====================
// Evaluate the given code. This allows you to do loops and conditions.