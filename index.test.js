var sum = require('./index');

console.assert(
  sum() === 0,
  'passing nothing returns 0'
);

assertThrows(
  function() { sum(null); },
  /cannot pass a object/i,
  'passing a null is the only argument throws an error'
);


assertThrows(
  function() { sum(5, true); },
  /cannot pass a boolean/i,
  'passing a non-number or string as the second argument throws an error'
);

console.assert(
  sum(5, 5.234) === 10.234,
  'passing a decimal number works ok'
);

console.assert(
  sum('3', '4.23') === 7.23,
  'passing numbers as strings works ok'
);

assertThrows(
  function() { sum('hello', 'world'); },
  /hello.*?not a number/,
  'passing a non-number string throws an error'
);

console.assert(
  sum(5) === 5,
  'passing a single number returns that number'
);

console.assert(
  sum(5, 1000, -3) === 1002,
  'summing positive and negative numbers'
);

console.log('All tests passed!');



function assertThrows(fn, expectedErrorMessage, message) {
  var errorMessage = 'Expected the function to throw an error, but it did not';
  try {
    fn();
    console.assert(false, errorMessage);
  } catch(e) {
    if (e.message === errorMessage) {
      throw new Error(message);
    }
    console.assert(
      matchesErrorMessage(e.message, expectedErrorMessage),
      'expected error message', e.message, 'to match', expectedErrorMessage
    );
  }
}


function matchesErrorMessage(e, message) {
  if (typeof message === 'string') {
    return message.indexOf(e) !== -1;
  } else {
    return message.test(e);
  }
}

