function filterArray(numbers, value) {
    let dizi = [];
    for (const number of numbers) {
      if (number>value) {
        dizi.push(number);
      }
    }
    console.log(dizi);
    return dizi;
}
