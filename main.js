let myArray = [100, 1, 200, 2, 300, 3, 1];

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
// console.log(myIndexOf(myArray, 100)); 
// // returns 0
// console.log(myIndexOf(myArray, 300)); 
// // returns 4
// console.log(myIndexOf(myArray, 900)); 
// // returns -1


// ************************************************** //

// lastIndexOf()
const myLastIndexOf = (inputArray, search) => {
  let resultIndex = -1
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === search) {
      resultIndex = i;
    }
  }
  return resultIndex;
}

// lastIndexOf implementation
console.log(myLastIndexOf(myArray, 1));
// returns 6
console.log(myLastIndexOf(myArray, 300));
// returns 4
console.log(myLastIndexOf(myArray, 4));
// returns -1

// ************************************************** //