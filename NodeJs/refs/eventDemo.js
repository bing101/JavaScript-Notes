const EventEmitter = require('events');

// Create class
class MyEventEmitter extends EventEmitter{};

// Create an instance
const emitter = new myEventEmitter();

emitter.on('event', ()=> console.log("event Fired !!"));

// Trigger event
emitter.emit('event');

module.exports = MyEventEmitter