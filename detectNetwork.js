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
  let firstOneDigit = cardNumber[0];
  let firstFourDigits = cardNumber[0] + cardNumber [1] + cardNumber[2] + cardNumber[3];
  let firstThreeDigits = cardNumber[0] + cardNumber[1] + cardNumber[2];
  const discoverThreeDigits = ['644', '645', '646', '647', '648', '649'];
  const masterTwoDigits = ['51', '52', '53', '54', '55'];
  const maestroFourDigits = ['5018', '5020', '5038', '6304'];
  let chinaPrefixes = [];
  for(let j = 622126; j <= 622925; j++){
    chinaPrefixes.push(j.toString());
  }
  chinaPrefixes.push('624');
  chinaPrefixes.push('625');
  chinaPrefixes.push('626');
  for(let k = 6282; k <= 6288; k++){
    chinaPrefixes.push(k.toString());
  }
  function checkDigits(array, numbers){
    for(let value of array){
      if(value === numbers){
        return true;
      }
    }
    return false;
  }

  if(cardNumber.length === 14){
    if(firstTwoDigits === '38' || firstTwoDigits === '39'){
      return 'Diner\'s Club';
    }
  }

  if(cardNumber.length === 15){
    if(firstTwoDigits === '34' || firstTwoDigits === '37'){
      return 'American Express';
    }
  }

  if(cardNumber.length === 13){
    if(firstOneDigit === '4'){
      return 'Visa';
    }
  }

  if(cardNumber.length === 16){
    if(firstOneDigit === '4'){
      return 'Visa';
    }
    if(checkDigits(masterTwoDigits, firstTwoDigits)){
      return 'MasterCard';
    }
    if(firstFourDigits === '6011' || firstTwoDigits === '65'){
      return 'Discover';
    }
    if(checkDigits(discoverThreeDigits, firstThreeDigits)){
      return 'Discover';
    }
  }

  if(cardNumber.length === 19){
    if(firstOneDigit === '4'){
      return 'Visa';
    }
    if(firstFourDigits === '6011' || firstTwoDigits === '65'){
      return 'Discover';
    }
    if(checkDigits(discoverThreeDigits, firstThreeDigits)){
      return 'Discover';
    }
  }

  for(let i = 0; i < maestroFourDigits.length; i++){
    if(maestroFourDigits[i] === firstFourDigits && cardNumber.length >= 12 && cardNumber.length <= 19){
      return 'Maestro';
    }
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



