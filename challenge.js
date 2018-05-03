// Create a function called nameChecker that takes two parameters, an array
// of lowercase names and a number. For each name in the array that is longer
// than the number parameter, console.log out "The name 'name' is longer than
// 'number' characters". Return an array of names that are longer than the number
// from the function and console that out as well.

// To run this function `cd` to the directory the file is in and run `node whateverYouNameThis.js`
const userArg = process.argv[2];

// Js Docs vvv use: '/**'
/**
 * This function returns an array of names longer than the number param
 * @param {array} arrayParam
 * @param {number} numberParam
 * @return {array}
 */
function nameChecker(arrayParam, numberParam) {
  if (isNaN(numberParam)) {
    console.log('you need to enter a number');
  }
  // filter: if true, returns element
  // implicit return
  return arrayParam.filter(elem => elem.length > numberParam)
    .map((elem) => {
      console.log(`The name ${elem} is longer than ${numberParam} characters`);
      return elem;
    });
}

const namesArray = ['joshua', 'owen', 'miles', 'cassandra'];
const newArray = nameChecker(namesArray, userArg);
console.log(newArray);

// Expected output:
// The name Joshua is longer than 5 characters
// The name Cassandra is longer than 5 characters
// ['joshua', 'cassandra']
