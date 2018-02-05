function sumFor(numList) {
  let total = 0;
  for (const num of numList) {
    total += num;
  }
  return total;
}

function sumWhile(numList) {
  let total = 0;
  let i = 0;
  while (i < numList.length) {
    total += numList[i];
    i++;
  }
  return total;
}

function sumRecursion(numList) {
  if (numList.length === 0) {
    return 0;
  }
  return numList[0] + sumRecursion(numList.slice(1, numList.length));
}

function sumUnderscore(numList) {
  return _.reduce(numList, function (memo, num) {
    return memo + num;
  });
}
const myNumList = [1, 2, 3, 4, 5];
console.log(sumFor(myNumList));
console.log(sumWhile(myNumList));
console.log(sumRecursion(myNumList));
console.log(sumUnderscore(myNumList));
