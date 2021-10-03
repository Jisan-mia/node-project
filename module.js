// module is just a file
// in nodejs every file is a module
// npm module

// IIFE
/* 
(function (exports, require, module, __dirname, __filename) {
  const colorCli = require('cli-color');
})() 
*/


// const colorCli = require('cli-color');
// console.log(colorCli.green('Hello nodejs'))


// Local Module
/* 
const auth = require('./auth')

auth.register('Jisan')
auth.login('Jisan', '1524') 
*/



// nodejs core modules
const path = require('path')

// dirname
//console.log('folder name: ',path.dirname(__filename))

// filename
// console.log('file name: ',path.basename(__filename))

// extension
// console.log('extension: ',path.extname(__filename))

// parse
// console.log('parse: ',path.parse(__filename))


// Join
// console.log('join: ',path.join(__dirname, 'order', 'app.js'))


// File system of fs module
/* 
With this we can
  - create folder/file
  - read file data
  - write file data etc.
 */

const fs = require('fs')

// make a directory/folder
/*
fs.mkdir(path.join(__dirname, '/text'), (err) => {
  if(err) {
    console.log(err)
    return
  }

  console.log('folder created')
}) 
*/


// create a file
/* 
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
 */


// Read a file
/* 
fs.readFile(path.join(__dirname, 'text', 'text.txt'),'utf-8', (err, data) => {
  if(err) {
    console.log(err)
    return;
  }
  // const content = Buffer.from(data)
  // console.log(content.toString())

  console.log(data)
}) 

*/


// operating system modules
// by this we can know about the os this current program is running.
// this module is important when we work with server monitoring
const os = require('os');

// console.log('OS type: ', os.type())

// console.log('OS Platform: ', os.platform())

// console.log("CPU Architecture", os.arch())

// console.log("CPU details", os.cpus())

// console.log("Free memory in byte", os.freemem())


// console.log("Total memory in byte", os.totalmem())

// console.log("Uptime is sec", os.uptime())




// Events module ***
const Emitter = require('events')