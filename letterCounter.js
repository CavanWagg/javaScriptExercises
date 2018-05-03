// Write a function that takes a string and returns an object
// representing the character count for each letter.
// why empty curly braces at the end???


const letterCounter = string => (
  string.split('').reduce((letterArray, letter) => {
  // if individual letter is in letterString
    if (letter in letterArray) {
    // console.log(letterArray[letter]);
    // increment the occurances of the letter through the string
      letterArray[letter]++;
    } else {
    // specific letter only occurs once
      letterArray[letter] = 1;
    }
    return letterArray;
  }, {})
);
console.log(letterCounter('aaaabbbbcccc'));


// Awesome code here!! Use you mdn .reduce() docs!!


// Expected Output:
// {a:1, b:2, c:3, d:4, e:5}
