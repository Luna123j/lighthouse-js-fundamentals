let number = 100;
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