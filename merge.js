const merge = function (array1, array2) {
  let array_merge = array1;
  for (let i = 0; i < array2.length; i++) {
    let count = 0;
    if (array_merge[0] === undefined) {
      return array2;
    }
    while (count < array_merge.length) {
      if (array2[i] <= array_merge[count]) {
        array_merge.splice(count, 0, array2[i]);
        count = array_merge.length;
      } else if (array2[i] > array_merge[array_merge.length - 1]) {
        array_merge.push(array2[i]);
        count = array_merge.length;
      } else {
        count++;
      }
    }

  }
  return array_merge;
}


console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);