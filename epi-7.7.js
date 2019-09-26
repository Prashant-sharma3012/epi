// 98  [0,1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

// this is not right, we are traversing duplicate paths!!!!


var result = [];

function encodePhone(num) {
  let phoneEncoding = [0, 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let digits = num.toString().split('');
  let encodedDigits = digits.map(e => phoneEncoding[e]);
  getCombinations(encodedDigits);
  return result;
}

function getCombinations(args) {
  console.log(args);
  if (args.length === args.join('').length) {
    if (!result.includes(args.join(''))) {
      return result.push(args.join(''));
    }
  }

  for (let i = 0; i < args.length; i++) {
    if (args[i].length > 1) {
      let temp = args[i];

      args[i] = temp.slice(0, 1);
      args1 = [...args];
      getCombinations(args1);

      args[i] = temp.slice(1);
      args2 = [...args];
      getCombinations(args2);

    }
  }
}

encodePhone(98);