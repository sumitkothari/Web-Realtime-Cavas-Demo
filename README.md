Web-Realtime-Cavas-Demo
=======================

An demo example of creating a realtime sharing of the data using Socket.io/node.js and displaying it on HTML5 canvas object.

The **basic logic** behind the working of this project :
* Setting the node environment to use [socket.io](http://socket.io/) and communicating with the api's provided by it.
* Creating a HTML5 canvas element where user can draw via mouse movements.
* Sending x & y co-ordinates of mouse move to node.js server.
* Receiving the x & y co-ordinates from the node.js server and drawing the same in canvas element.

## Environment :
* Node CLI : 0.10
* Test Browser : Crome/Firefox
* OS : Mac Mavericks

## Quick Startup :
* First setup the node server and include the [http](http://nodejs.org/api/http.html) , [socket.io](http://socket.io/#how-to-use) and [File System](http://nodejs.org/api/fs.html) npm modules.
* Clone this repo and setup as node.js project and properly the dependent npm modules.
* Check [index.js](https://github.com/sumitkothari/Web-Realtime-Cavas-Demo/blob/master/index.js) to tweak and manupulate the server end.
* Check [index.html](https://github.com/sumitkothari/Web-Realtime-Cavas-Demo/blob/master/index.html) to tweak and manupulate the client end.
