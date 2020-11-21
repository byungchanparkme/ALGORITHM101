// Sum of Odd Numbers
// 문제 출처 : https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript 
// Calculate the row sums of this triangle from the row index (starting at index 1)
// example) 
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8
function rowSumOddNumbers(n) {
  let sum = 0;
  let oddNumber = n * (n - 1) + 1
  for (let i = 0; i < n; i++) { 
    sum += oddNumber
    oddNumber += 2
  }
  return sum;
}

// clever answer
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}