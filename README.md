### What is node.js?
Node.js is runtime for JavaScript Language. It is built on Chrome's V8 JavaScript engine.
### Prerequisites of Learning Node.js
- Must have some basics knowledge of JavaScript
  

### Who is the original developer of node.js?
- Ryan Dahl

JavaScript Engine + C++ Program = node.js

### Setup your machine for node.js project
- Download node from (nodejs.org)[https:nodejs.org]
- Install it
- To check node.js installed open command prompt and enter `node -v` hit enter
- If it shows the version, you successfully installed.


### What is module
Module is just a file in nodejs every file is a module npm module

### IIFE -> Immediately Invoked function Expression
---
Every node file under the hood wrapper
```js
(function (exports, require, module, __dirname, __filename) {
  const colorCli = require('cli-color');
})() 
```

Require a package/library and store it on a variable
```js
const colorCli = require('cli-color');
console.log(colorCli.green('Hello nodejs'))
```


### Local Modules
---
 
```js
const auth = require('./auth')

auth.register('Jisan')
auth.login('Jisan', '1524') 
```



### Nodejs core modules
---
```js
const path = require('path')

//dirname
console.log('folder name: ', path.dirname(__filename))

//filename
console.log('file name: ', path.basename(__filename))

//extension
console.log('extension: ', path.extname(__filename))

//parse
console.log('parse: ', path.parse(__filename))


//Join
console.log('join: ', path.join(__dirname, 'order', 'app.js'))
```

### File system of fs module
 
With this we can
  - create folder/file
  - read file data
  - write file data etc.

Require fs module
```js
const fs = require('fs')
```

Make a directory/folder
```js
fs.mkdir(path.join(__dirname, '/text'), (err) => {
  if(err) {
    console.log(err)
    return
  }

  console.log('folder created')
}) 
```

Create a file
```js
fs.writeFile(path.join(__dirname, 'text', 'text.txt'), "Hi nodejs\n" , (err) => {
  if(err) {
    console.log(err);
    return;
  }
  fs.appendFile(path.join(__dirname, 'text', 'text.txt'), 'More data\n ', (err) => {
    if(err) {
      console.log(err);
      return
    }

    console.log('data added')
  } )
  console.log('file created')
})
```
 


Read a file
 
```js
fs.readFile(path.join(__dirname, 'text', 'text.txt'),'utf-8', (err, data) => {
  if(err) {
    console.log(err)
    return;
  }
   const content = Buffer.from(data)
   console.log(content.toString())

  console.log(data)
}) 
```



### Operating system modules
---
By this we can know about the os, where current program is running. This module is important when we work with server monitoring
```js
const os = require('os');

console.log('OS type: ', os.type())

console.log('OS Platform: ', os.platform())

console.log("CPU Architecture", os.arch())

console.log("CPU details", os.cpus())

console.log("Free memory in byte", os.freemem())


console.log("Total memory in byte", os.totalmem())

console.log("Uptime is sec", os.uptime())
```



### Events module ***
---
```js
const Emitter = require('events')  it returns class. firstly we need to create object 

const myEmitter = new Emitter();

 first parameter is eventName and the second is event listener
myEmitter.on('somename', (data) => {
  console.log(data)
})

 then we need to emit the event with the same eventName and pass the listener data
myEmitter.emit('somename', {
  name: 'Jisan'
})

class Auth extends Emitter{
  register(username) {
    console.log('Registered successfully')
    this.emit('registered', username)
  }
}
const auth = new Auth();

 listen
 verify email
auth.on('registered', (data) => {
  console.log(`sending email to ${data}`)
} )

 welcome email
auth.on('registered', (data) => {
  console.log(`sending welcome email to ${data}`)
} )

auth.register('Jisan Mia')
```





### http module ***


```js
// require http, fs and path module 
const http = require('http');
const fs = require('fs');
const path = require('path');

// create server
https.createServer((req, res) => {
  // show content of index.html on server
  fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    if(err) {
      throw err
    }
    res.end(content)
  })
})

const PORT = process.env.PORT || 3000

// listen the sever
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
```