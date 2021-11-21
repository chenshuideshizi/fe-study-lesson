var m = require('./moduleB');

setTimeout(function() {
  console.log("moduleA, m", m);
}, 1000);