"use strict";

require("@babel/polyfill");

const func = () => console.log("hello es6");

const {
  a,
  b = 1
} = {
  a: "this is a"
};
const array = [1, 2, 3];
console.log(array.includes(2));
