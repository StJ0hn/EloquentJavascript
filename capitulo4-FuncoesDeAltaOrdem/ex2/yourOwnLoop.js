let arrayNumberTwo = [[76, 43], [65, 12], [12, 13], [16, 18], [109]];
function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}
loop(
  0,
  (i) => i < 5,
  (i) => i + 1,
  (i) => console.log(i),
);
