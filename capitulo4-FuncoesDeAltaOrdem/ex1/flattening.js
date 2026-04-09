let arrayNumberOne = [[76, 43], [65, 12], [12, 13], [16, 18], [109]];
let arrayNumberOneReorganized = arrayNumberOne.reduce((a, b) => a.concat(b));
console.log(arrayNumberOneReorganized);
