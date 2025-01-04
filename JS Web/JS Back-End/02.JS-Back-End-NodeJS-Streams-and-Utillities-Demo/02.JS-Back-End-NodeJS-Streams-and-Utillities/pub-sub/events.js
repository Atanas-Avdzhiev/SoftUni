const events = require('events');

const messageBroker = new events.EventEmitter();

const messageReceivedHandler = (message) => {
    console.log(`Message received: ${message}`);
};

// Subscribe
messageBroker.on('message_received', messageReceivedHandler);

// Publish
messageBroker.emit('message_received', 'Hello Pesho!');

// Unsubscribe
messageBroker.off('message_received', messageReceivedHandler)

messageBroker.emit('message_received', 'Hello Gosho!');

// DOM Example for subscribe
buttonElement = {};
buttonElement.addEventListener('click', (event) => {
    console.log('Button Clicked');
});

// DOM example for unsubscribe
// buttonElement.removeEventListener('click', ...)
