function every(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

function every2(array, test) {
  return !array.some((element) => !test(element));
}
console.log(every([1, 2, 3], (n) => n < 4));
console.log(every2([1, 2, 3], (n) => n < 4));
