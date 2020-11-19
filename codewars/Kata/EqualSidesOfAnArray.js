// Equal Sides Of An Array
// 문제 출처 : https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// 배열에서 현재 인덱스 번호를 제외하고 왼편 요소들의 합과 오른편 요소들의 합이 같은 인덱스 번호 찾기
// Input: An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// Output:
// 왼편 요소들의 합과 오른편 요소들의 합이 같은 가장 작은 인덱스 번호를 결과값으로 반환해라.
// 문제에서 요구하는 규칙을 만족하는 인덱스 번호가 존재하지 않는다면, -1을 결과값으로 반환해라.

// 1번째 방법
// idx를 기준으로 leftSide와 rightSide 배열 생성. (단, idx의 요소는 제외)
// leftSide와 rightSide 배열의 합을 구한다.
// 두 배열의 합이 같다면 idx를 결과값으로 반환한다.
// 이를 만족하는 idx가 존재하지 않는다면, -1을 결과값으로 반환한다.
function calcSum(array) {
  return array.length ? array.reduce((a, b) => a + b, 0) : 0
}

function findEvenIndex(arr) {
  let idx = 0
  let leftSide = []
  let rightSide = []

  do {
    leftSide = arr.slice(0, idx)
    rightSide = arr.slice(idx + 1, arr.length)
    if (calcSum(leftSide) === calcSum(rightSide)) return idx
    idx++
  } while (idx < arr.length)
  return -1
}

// 2번째 방법
// 처음에 left는 0으로, right는 전체 배열의 합으로 설정한다.
// i가 1 이상이고 i가 증가함에 따라 left에는 i-1의 요소를 더해준다.
// i가 증가함에 따라 right에는 i의 요소를 빼준다.
// 두 값을 비교하여 일치하면 그때 해당하는 i를 결과값으로 반환해준다.
// 이를 만족하는 i가 존재하지 않느나면 -1을 결과값으로 반환해준다.
function findEvenIndex(arr) {
  let left = 0,
    right = arr.reduce(function (pv, cv) {
      return pv + cv
    }, 0)
  for (let i = 0; i < arr.length; i++) {
    if (i > 0) left += arr[i - 1]
    right -= arr[i]

    if (left == right) return i
  }

  return -1
}

// clever answer
// 처음부터 목적이 index 번호를 찾는 것이기 때문에 findIndex 메소드 사용.
// 원하는 요소들만을 가지는 배열을 생성하고 이 배열의 합을 구하는 함수를 만든다.
// 전부 배열의 메소드를 사용함.
const sum = (arr, from, to) => arr.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = (arr) => arr.findIndex((el, i) => sum(arr, 0, i) === sum(arr, i + 1, arr.length))
