// takes a string and says it, means 1 => 11 (one 1) 21 => 1211(one 2 one 1) 111223 => 312213(three 1 , two 2, one 3)

// you can further improve this by not making result as an array but a string and you keep appending 
// to it as you go, that will save last join

let says = (num) => {
  let toScan = num.toString().split('');
  let count = 1;
  let result = [];

  const addToResult = (count, num) => {
    result.push(count);
    result.push(num);
  }

  for (i = 0; i < toScan.length; i++) {
    if (i !== 0 && toScan[i] === toScan[i - 1]) {
      count = count + 1;
    }

    if (i !== 0 && toScan[i] !== toScan[i - 1]) {
      addToResult(count, toScan[i - 1]);
      count = 1;
    }

    if (i === toScan.length - 1) {
      addToResult(count, toScan[i]);
      count = 1;
    }
  }

  return result.join('');
}

// i will just call it a key that reprasants the nth number
let getMyKey = (num) => {
  if (num === 1) {
    return 1;
  }

  prev = 1;
  for (j = 2; j <= num; j++) {
    prev = says(prev);
    if (j === num) {
      return prev;
    }
  }
}