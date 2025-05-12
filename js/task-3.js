let newArray = [];

function filterArray(numbers, value) { 

  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
    }
  }  
  return newArray;
}

console.log(newArray);
