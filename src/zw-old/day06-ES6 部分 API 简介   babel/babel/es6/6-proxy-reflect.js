// Object.defineProperty

var obj = new Proxy({}, {
  get: function(target, propKey, receiver) {
    console.log(`getting ${propKey}`);
    return target[propKey];
  },
  set: function(target, propKey, value, receiver) {
    console.log(`setting ${propKey}`);
    return Reflect.set(target, propKey, value, receiver);
  }
});

obj.something = 1;
console.log(obj.something);