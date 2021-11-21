// var it = makeIterator({
//   a: 'a',
//   b: 'b',
// });

// function makeIterator(array) {
//   var nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < array.length
//         ? {value: array[nextIndex++], done: false}
//         : {value: undefined, done: true}
//     }
//   }
// }


let iterable = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator],
};

for (let item of iterable) {
  console.log(item);
}