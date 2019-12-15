---
title: How to deploy React app with socket.io to Heroku
date: 2017-08-11
tags: ['react', 'heroku', 'socket.io', 'ci/cd']
---

It doesn't look complicated, but to be honest, I spent some time to finish this task.
I will describe the process of deploying an app, where the server and the client are in one project repo. It is worth noting, however, that such structure is used only for small applications and shouldn't be taken seriously in production.

**NOTE:** _In this tutorial, I'll be using yarn as a package manager and the latest Node.js version. Also, you should install Heroku CLI to enable the project deploying from the terminal console._

![Cover](/blog/react-socketio-heroku/cover.png)

## Let's get started!

First of all, we need to create a project structure. Since we're using _create-react-app_, it should be installed globally, then run in terminal

```bash
create-react-app react-sockets-example
cd react-sockets-example
```

Nice. Our client-side is ready for development.

Let's install _Express_ package for using it on server-side and sockets that will be used later

```bash
yarn add express socket.io socket.io-client
```

Thus we have such project dependencies and now ready to write some code

```json
{
  "name": "react-sockets-expamle",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "express": "^4.15.4",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "socket.io": "^2.0.3",
    "socket.io-client": "^2.0.3"
  },
  "devDependencies": {
    "react-scripts": "1.0.11"
  }
}
```

## Application skeleton

As we could see _create-react-app_ has done some "dirty work" for us.
Going to **/src/index.js**, where React entry is placed, and adding some code here

```js
import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const socket = io();

// sockets test
socket.on('hello', ({ message }) => alert(message));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

When a socket catches a "hello" event, we will see the notification window with server data.
Now working with the server. Just add a **/server** folder into a **/src** and create a file "index.js". It will be the server entry point. Code for this file is shown below

```js
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res, next) => res.sendFile(__dirname + './index.html'));

// sockets test
io.on('connection', socket => socket.emit('hello', { message: 'hello from server!' }));

server.listen(port);
```

Here we manually creating a server with _http_, wrapping it with _express_ and also reusing created server for _socket.io_ usage.
Express's "app.use" helps us providing static files on our host.
So, after this, files that placed in **/build** folder will be available the way like this: _http://localhost:8080/static…_

I also added code, which allows the socket server to emit some data when a connection event will happen.

## Heroku

**NOTE:** _In this example I'll be using the following approach: creating the bundle locally and send the file already packed to Heroku, then Heroku will run the server that will serve this static._

Before deploying open **.gitignore** file and delete the following line: /build

Then run script

```bash
yarn build
```

For _Heroku_ kitchen define a "Procfile" in the root of the project and add the line that shown below to it

```bash
web: node ./src/server/index.js
```

Also, add following lines to **package.json** (you may specify the latest version)

```json
"engines": {
  "node": "6.2.0"
}
```

Then we should add our project to VCS

```bash
git init
git add .
git commit -m "heroku deploy"
```

To deploy the app, first of all, we should log in Heroku and creating an app. Let's do this with _Heroku CLI_

```bash
heroku login # typing login and password…
heroku create react-sockets-example # I guess this name will be unavailable
```

**NOTE:** _the name of the Heroku app should be the same with listed in package.json_

```bash
git push heroku master
```

If all done successfully you might see something like that

```bash
remote: Verifying deploy… done.
To https://git.heroku.com/react-socket-example.git
 * [new branch] master -> master
```

Deploy is done!

Well, all that remains is to open the app

```bash
heroku open
```

![Demo](/blog/react-socketio-heroku/demo.gif)

Your browser will open the app automatically.
