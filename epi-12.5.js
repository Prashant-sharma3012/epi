// take 2 inputs
// n  = number whose sqrt has to be found
// precision = till what precision ( max lets limit it to 5 for now)

// ok this is really bad, but will revisit this

const sqrt = (num, precision = 5) => {
  let value = helper(num, 1, num, 1);
  let atDecimal = 10;


  while (value[0].toString().length < precision + 2) { // 2 => 1 for decimal and one before decimal
    value = helper(num, value[0], value[1], atDecimal);
    atDecimal = atDecimal * 10;
  }

  return value[0];
}


// this helps me to find the two numbers closest to root n and n+1 between the numbers provided
const helper = (num, start, end, atDecimal) => {
  let result = [];
  let R, L;

  if (atDecimal !== 1) {
    L = start + 1 / atDecimal;
    R = end - 1 / atDecimal;
  } else {
    R = end;
    L = start;
  }

  let keepSearchig = true;

  // this is just here to avoid infite loop
  let i = 0;

  // binary search
  while (keepSearchig && i < 20) {
    i++;
    let answer = parseFloat(((L + R) / 2).toFixed(atDecimal.toString().length - 1));

    if (Math.pow(answer, 2) > num) {
      if (Math.pow((answer - (1 / atDecimal)), 2) < num) {
        keepSearchig = false;
        result = [(answer * atDecimal - 1) / atDecimal, answer];
      }
      atDecimal === 1 ? R = answer - 1 : R = parseFloat(((answer * atDecimal - 1) / atDecimal).toFixed(atDecimal.toString().length - 1));
    }

    if (Math.pow(answer, 2) < num) {
      if (Math.pow((answer + (1 / atDecimal)), 2) > num) {
        keepSearchig = false;
        result = [answer, (answer * atDecimal + 1) / atDecimal];
      }
      atDecimal === 1 ? L = answer + 1 : L = parseFloat(((answer * atDecimal + 1) / atDecimal).toFixed(atDecimal.toString().length - 1));
    }
  }


  return result;
}