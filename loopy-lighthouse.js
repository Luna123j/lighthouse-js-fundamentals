/*let number = 100;
let output;
for (let i = 0; i < 100; i++) {
  if (number % 3 === 0 && number % 4 === 0) {
    output = 'LoopyLighthouse'
  } else if (number % 3 === 0) {
    output = 'Loopy';
  } else if (number % 4 === 0) {
    output = 'lighthouse';
  } else {
    output = number;
  }
  console.log(output);
  number += 1;
} 
*/

const loopyLighthouse = function (range, multiples, words) {
  let output;
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      output = words[0] + words[1]
    } else if (i % multiples[0] === 0) {
      output = words[0];
    } else if (i % multiples[1] === 0) {
      output = words[1];
    } else {
      output = i;
    }
    console.log(output);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);