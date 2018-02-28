'use strict';

const palindromeCheck = function(sentence) {
  const result = sentence.replace(/[\W_]/g, '').split('').reverse().join('')
    .toLowerCase();
  console.log(result === sentence.replace(/[\W_]/g, '').toLowerCase());
};

palindromeCheck('wow');
palindromeCheck('was it a car or a cat I saw');
palindromeCheck('A man, a plan, a canal, Panama!');
palindromeCheck('Cavan');
