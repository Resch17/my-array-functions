let myArray = [100, 1, 200, 2, 300, 3, 1];

/*
 * REVIEW: I believe you'll fid that the `callback` function passed to
 *   most of these functions should take more than one argument
 * AR - added optional arguments to callback functions
 */

// forEach()
const myForEach = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    callback(inputArray[i], i, inputArray);
  }
};

// // forEach implementation
// // adds 5 to each element in array
// myForEach(myArray, (input, x) => {
//   let result = input + 5;
//   console.log(result, `Index: ${x}`);
//   return result;
// });

// ************************************************** //

// map()
const myMap = (inputArray, callback) => {
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(callback(inputArray[i], i, inputArray));
  }
  return result;
};

// // map implementation
// // multiplies each element by 50, puts it into an object with the index listed
// let resultArray = myMap(myArray, (x, i) => {
//   return {
//     result: x * 50,
//     index: i
//   };
// });
// console.log(resultArray);

// ************************************************** //

// includes()
const myIncludes = (inputArray, search) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === search) {
      return true;
    }
  }
  return false;
};

// // includes implementation
// console.log(myIncludes(myArray, 300));
// // returns true
// console.log(myIncludes(myArray, 4));
// // returns false

// ************************************************** //

// some()
const mySome = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i], i, inputArray);

    /*
     * REVIEW: the value of `result` might not be a real boolean, but may be
     *  either "truthy" or "falsy"
     *  Your code does not account for that.
     * * AR - fixed
     */

    if (result) {
      return true;
    }
  }
  return false;
};

// // some implementation
// console.log(mySome(myArray, x => x > 9000));
// // returns false
// console.log(mySome(myArray, x => x === 300));
// // returns true

// ************************************************** //

// every()
const myEvery = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i], i, inputArray);

    /*
     * REVIEW: the value of `result` might not be a real boolean, but may be
     *  either "truthy" or "falsy"
     *  Your code does not account for that.
     * * AR - fixed
     */

    if (!result) {
      return false;
    }
  }
  return true;
};

// // every implementation
// console.log(myEvery(myArray, x => x >= 1))
// // returns true
// console.log(myEvery(myArray, x => x < 200))
// // returns false

// ************************************************** //

// find()
const myFind = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i], i, inputArray);

    /*
     * REVIEW: the value of `result` might not be a real boolean, but may be
     *  either "truthy" or "falsy"
     *  Your code does not account for that.
     * AR - fixed
     */

    if (result) {
      return inputArray[i];
    }
  }
};

// // find implementation
// console.log(myFind(myArray, (x)=>x>100))

// ************************************************** //

// indexOf()
const myIndexOf = (inputArray, search) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === search) {
      return i;
    }
  }
  return -1;
};

// // indexOf implementation
// console.log(myIndexOf(myArray, 1));
// // returns 1
// console.log(myIndexOf(myArray, 300));
// // returns 4
// console.log(myIndexOf(myArray, 900));
// // returns -1

// ************************************************** //

/*
 * REVIEW: This function looks like it does the same thing as `myIndexOf` above
 * AR - they are designed almost the same, but myLastIndexOf keeps iterating and updates the resultIndex variable as it finds more matches. indexOf ends the loop by returning the index when it finds the first match.
 */

// lastIndexOf()
const myLastIndexOf = (inputArray, search) => {
  let resultIndex = -1;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === search) {
      resultIndex = i;
    }
  }
  return resultIndex;
};

// // lastIndexOf implementation
// console.log(myLastIndexOf(myArray, 1));
// // returns 6
// console.log(myLastIndexOf(myArray, 300));
// // returns 4
// console.log(myLastIndexOf(myArray, 4));
// // returns -1

// ************************************************** //

// join()
const myJoin = (inputArray, separator) => {
  let resultString = "";

  if (separator === undefined) {
    separator = ",";
  }

  let arrayLength = inputArray.length;

  for (let i = 0; i < arrayLength; i++) {
    /*
     * REVIEW: The condition in this `if` can be simplified
     */
    if (i === arrayLength - 1 || arrayLength === 1) {
      resultString += inputArray[i];
    } else {
      resultString += inputArray[i] + separator;
    }
  }
  return resultString;
};

// // join implementation
const myWordArray = ["apple", "banana", "pear", "peach"];
// console.log(myJoin(myWordArray));
// console.log(myJoin(myWordArray, "-"))
const mySecondWordArray = ["apple"];
// console.log(myJoin(mySecondWordArray));

// ************************************************** //

// concat()
const myConcat = (...inputArrays) => {
  let outputArray = [];
  for (let i = 0; i < inputArrays.length; i++) {
    for (let j = 0; j < inputArrays[i].length; j++) {
      outputArray.push(inputArrays[i][j]);
    }
  }
  return outputArray;
};

// // concat implementation
// console.log(myConcat(myArray, myWordArray, mySecondWordArray));

// ************************************************** //

/*
 * REVIEW: This is not a `reduce()`, this is a `sum()`
 */

// reduce()
const myReduce = (inputArray, accumulator) => {
  if (accumulator === undefined) {
    accumulator = 0;
  }
  for (let i = 0; i < inputArray.length; i++) {
    accumulator += inputArray[i];
  }
  return accumulator;
};

// // reduce implementation
// console.log(myReduce(myArray, 0));
// // returns 607
// console.log(myReduce(myArray, 50));
// // return 657

// ************************************************** //

// reverse()
const myReverse = (inputArray) => {
  const resultArray = [];
  const last = inputArray.length - 1;
  for (let i = last; i > -1; i--) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
};

// // reverse implementation
// const myArrayToReverse = ["able", "baker", "charlie", "dog"];
// console.log(myReverse(myArrayToReverse));
