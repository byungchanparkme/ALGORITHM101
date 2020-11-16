// 주어진 숫자보다 작은 자연수들 중 3이나 5로 나누어 떨어지는 모든 수들의 합을 구하여라.
// 문제 출처 : https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript 

// 1번째 방법(for 반복문 이용)
function solution(number) {
  if (number <= 2) return 0
  let sum = 0
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum
}

// 2번째 방법(Array 메소드 이용)
const solution = (number) =>
  number < 3
    ? 0
    : Array.from({ length: number - 1 }, (_, i) => i + 1)
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b)
