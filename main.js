let myArray = [100, 1, 200, 2, 300, 3];

// forEach()
const myForEach = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    callback(inputArray[i]);
  }
};

// // forEach implementation
// myForEach(myArray,function(input) {
//   let result = input + 5;
//   console.log(result);
//   return result;
// });

// ************************************************** //

// map()
const myMap = (inputArray, callback) => {
  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(callback(inputArray[i]));
  }
  return result;
};

// // map implementation
// let resultArray = myMap(myArray, (x) => x * 50);
// console.log(resultArray);

// ************************************************** //

// includes()
const myIncludes = (inputArray, test) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === test) {
      return true;
    }
  }
  return false;
};

// // includes implementation
// console.log(myIncludes(myArray, 300));

// ************************************************** //

// some()
const mySome = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i]);
    if (result === true) {
      return true;
    }
  }
  return false;
};

// // some implementation
// console.log(mySome(myArray, x => x > 9000));

// ************************************************** //

// every()
const myEvery = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i]);
    if (result !== true) {
      return false;
    }
  }
  return true;
};

// // every implementation
// console.log(myEvery(myArray, x => x >= 1))

// ************************************************** //

// find()
const myFind = (inputArray, callback) => {
  for (let i = 0; i < inputArray.length; i++) {
    const result = callback(inputArray[i]);
    if (result === true) {
      return inputArray[i];
    }
  }
};

// // find implementation
// console.log(myFind(myArray, (x)=>x>100))

// ************************************************** //