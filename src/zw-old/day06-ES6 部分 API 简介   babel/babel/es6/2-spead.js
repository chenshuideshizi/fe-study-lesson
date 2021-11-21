// console.log(...[1, 2, 3]);

const list = [1, 2, 3];
// a = list[0];
// rest = list.slice(1);
const [a, ...rest] = list;
console.log(a, rest);

// 1. 跟 ESModule 模块化区分

