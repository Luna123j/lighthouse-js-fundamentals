const howManyHundreds = function (number) {
  let rounded = Math.floor((number / 100));
  return rounded;
}

console.log(howManyHundreds(364829));