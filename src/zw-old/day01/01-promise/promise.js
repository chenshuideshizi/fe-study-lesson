const promise = function() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

const promise2 = promise()
  .then(function() {
    return "hello world";
  })

promise2
  .catch(e => {
    console.log(e);
  });
  .then(function(str) {
    console.log(str);
  })

