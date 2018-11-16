var length = require('length.js');

console.log("test");

console.log(length(100, 'cm').to('m'));

var nums = [2,4,55,55,55];
var fives = []

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);
