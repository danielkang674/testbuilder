// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  let firstTwoDigits = cardNumber[0] + cardNumber[1];
  const MCDIGITS = ['51', '52', '53', '54', '55']
  if(cardNumber.length === 14)
    if(firstTwoDigits === '38' || firstTwoDigits === '39'){
      return 'Diner\'s Club';
  }
  if(cardNumber.length === 15)
    if(firstTwoDigits === '34' || firstTwoDigits === '37'){
      return 'American Express';
  }
  if(cardNumber.length === 13 || cardNumber.length === 19)
    if(cardNumber[0] === '4'){
      return 'Visa';
  }
  if(cardNumber.length === 16){
    if(cardNumber[0] === '4'){
      return 'Visa';
    }
    for(let i = 0; i < MCDIGITS.length; i++){
      if(firstTwoDigits === MCDIGITS[i]){
        return 'MasterCard';
      }
    }
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

