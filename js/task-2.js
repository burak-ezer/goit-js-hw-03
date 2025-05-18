function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    newArray.length = maxLength;
  }
  console.log(newArray);
  return newArray;
}
