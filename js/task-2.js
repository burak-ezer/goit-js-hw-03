let newArray = [];

function makeArray(firstArray, secondArray, maxLength) {
  newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray.length = maxLength;
  }  
  return newArray;
}

console.log(newArray);
