describe('chatterbox', function() {

  describe('ajax behavior', function() {
    var ajaxSpy;

    before(function() {
      ajaxSpy = sinon.stub($, 'ajax');
      App.initialize();
    });

    beforeEach(function() {
      ajaxSpy.reset();
    });

    describe('creating', function() {
      it('should submit a POST request via $.ajax', function(done) {
        Parse.create({});
        expect($.ajax.calledOnce).to.be.true;
        // sinon.spy method `args` comes in the form [function calls][arguments from that call]
        ajaxOptions = typeof $.ajax.args[0][0] === 'object' ? $.ajax.args[0][0] : $.ajax.args[0][1];
        expect(ajaxOptions.type).to.equal('POST');
        done();
      });

      it('should send the message along with the request as a stringified object', function(done) {
        var message = {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        };

        Parse.create(message);
        ajaxOptions = typeof $.ajax.args[0][0] === 'object' ? $.ajax.args[0][0] : $.ajax.args[0][1];
        expect(ajaxOptions.data).to.be.a('string');
        expect(ajaxOptions.contentType).to.equal('application/json');
        done();
      });

      it('should send the correct message along with the request', function(done) {
        var message = {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        };

        Parse.create(message);
        ajaxOptions = typeof $.ajax.args[0][0] === 'object' ? $.ajax.args[0][0] : $.ajax.args[0][1];
        var sentMessage = JSON.parse(ajaxOptions.data);
        expect(sentMessage).to.deep.equal(message);
        done();
      });

    });

    describe('fetching', function() {
      it('should submit a GET request via $.ajax', function(done) {
        Parse.readAll();
        expect($.ajax.calledOnce).to.be.true;
        ajaxUrl = typeof $.ajax.args[0][0] === 'string' ? $.ajax.args[0][0] : $.ajax.args[0][0].url;
        expect(ajaxUrl).to.equal(Parse.server);
        done();
      });

    });
  });

  describe('chatroom behavior', function() {
    it('should be able to add messages to the DOM', function() {
      var message = {
        username: 'Mel Brooks',
        message_id: '4',
        text: 'Never underestimate the power of the Schwartz!',
        roomname: 'lobby'
      };
      MessagesView.renderMessage(message);
      expect($('#chats').children().length).to.equal(1);
    });

    it('should be able to add rooms to the DOM', function() {
      RoomsView.renderRoom('superLobby');
      expect($('#rooms select').children().length).to.equal(1);
    });

    //our added test
    it('should be able to set messages to Messages object', function() {
      Messages.set({
        username: 'Guillermo',
        message_id: '2',
        text: 'OK',
        roomname: 'lobby'
      });
      Messages.set({
        username: 'Gabby',
        message_id: '3',
        text: 'New Message',
        roomname: 'lobby'
      });
      expect(Object.keys(Messages._data).length).to.equal(2);
    });

    it('should be able to get messages from Messages object', function() {
      var messages = Messages.get('Guillermo');
      expect(messages[0].text).to.equal('OK');
    });

    // it('should be able to submit new messages to the server', function() {
    //   var message = {
    //     username: 'Guillermo',
    //     text: 'Testing Message Save',
    //     roomname: ''
    //   };
    //   Parse.create(message);
    //   expect(Parse.readAll[0].text).to.equal('Testing Message Save');
    // });

    it('.add should add new rooms to Rooms Model', function() {
      Rooms.add('private chat room');
      expect(Object.values(Rooms._data)[0]).to.equal('private chat room');
    });
  });

  describe('events', function() {
    it('should add a friend upon clicking their username', function() {
      sinon.spy(Friends, 'toggleStatus');

      App.initialize();
      MessagesView.renderMessage({
        username: 'Mel Brooks',
        message_id: '1',
        text: 'I didn\'t get a harumph outa that guy.!',
        roomname: 'lobby'
      });
      $('#chats').find('.username').trigger('click');
      expect(Friends.toggleStatus.called).to.be.true;

      Friends.toggleStatus.restore();
    });

    it('should add a room when clicking add', function() {
      sinon.spy(Rooms, 'add');
      var prompt = window.prompt;
      window.prompt = sinon.stub().returns('testroom');

      App.initialize();
      $('#rooms').find('button').trigger('click');
      expect(Rooms.add.called).to.be.true;

      window.prompt = prompt;
      Rooms.add.restore();
    });

    it('should try to send a message upon clicking submit', function() {
      sinon.spy(Parse, 'create');

      App.initialize();
      $('#message').val('Why so many Mel Brooks quotes?');
      $('form .submit').trigger('submit');
      expect(Parse.create.called).to.be.true;

      Parse.create.restore();
    });
  });
});
