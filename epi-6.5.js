// [2,3,5,5,7,11,11,11,13]  => [2,3,5,7,11,13,0,0,0] (last three can be anything) here you remove duplicates
// [2,3,5,11,7,11,11,15,13], 11  => [2,3,5,7,15,13,0,0,0] (last three can be anything) here you pass array and the key and remove that key
// epi 6.5 and its variants

const removeDuplicates = (arr) => {
  let at = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[at] !== arr[i]) {
      at = at + 1;
      arr[at] = arr[i]
    }
  }
  return arr;
}

const shiftZero = (arr) => {
  let at = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[at] === 0 && arr[i] !== 0) {
      arr[at] = arr[i];
      at = at + 1;
      arr[i] = 0;
    }

    if (arr[at] !== 0 && arr[i] === 0) {
      at = i;
    }
  }
  return arr;
}

const removeKey = (arr, key) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === key) {
      arr[i] = 0;
    }
  }
  return shiftZero(arr);
}

removeDuplicates([2, 3, 5, 5, 7, 11, 11, 11, 13]);
removeKey([1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 2, 3, 4], 2);