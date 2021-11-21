const parser = require('./index');

const input = "(add 2 (subtract 40 2))";

const result = parser(input);
console.log(JSON.stringify(result));