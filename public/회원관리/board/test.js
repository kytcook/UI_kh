const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArray = [];

arr.forEach(function (element) {
  if (element % 2 == 1) {
    oddArray.push(element);
  }
});

console.log(oddArray); // [ 1, 3, 5, 7, 9 ]
