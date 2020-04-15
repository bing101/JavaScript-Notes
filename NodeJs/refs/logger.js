const MyEventEmitter = require('events');


class Logger extends MyEventEmitter{
 
    log(msg){
        console.log('Logger class Message: ');
        this.emit('msg', {id: 1, url: 'https'});
    }   
    
}

module.exports = Logger;