module.exports = sum;


function sum() {
  var i, arg, argType, parsed;
  var total = 0;
  for (i = 0; i < arguments.length; i++) {
    arg = arguments[i];
    argType = typeof arg;
    if (argType === 'number') {
      total += arg;
    } else if (argType === 'string') {
      total += getNumberFromString(arg);
    } else {
      throw new Error('cannot pass a ' + argType, arg);
    }
  }
  return total;

  function getNumberFromString(string) {
    parsed = parseFloat(arg, 10);
    if (Number.isNaN(parsed)) {
      throw new Error(string + ' is not a number');
    } else {
      return parsed;
    }
  }
}


