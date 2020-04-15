const Logger = require('./logger');
const lo = new Logger();

lo.on('msg', () => console.log('Event Fired !!!'))

lo.log('Hello world !!');



