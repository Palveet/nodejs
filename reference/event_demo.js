const EventEmitter= require('events');

//create class
class MyEmitter extends EventEmitter {

}

//Init object
const myEmitter= new MyEmitter();

//event listener
myEmitter.on('event',()=>console.log('event fired!'))

//init event
myEmitter.emit('event');