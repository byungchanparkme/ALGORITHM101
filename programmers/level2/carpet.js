// 카펫
// 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42842
// input : 갈색 격자의 수 brown, 노란색 격자의 수 yellow
// return : 카펫의 가로, 세로 크기
// 구하는 과정
// 1. 갈색 격자의 수와 노란색 격자의 수의 합이 바로 전체 공간이다.
// 2. 전체 공간의 가로와 세로 길이는 전체 공간의 약수들이다.
// 3. 테두리를 제외한 모든 값이 yellow이기 때문에 가로와 세로를 2칸씩 줄인 값을 곱하면 yellow가 된다.
// 4. 가로의 길이가 세로의 길이보다 크거나 같으면서 3번의 조건에 부합하는 값이 바로 우리가 만족하는 결과값이다.

function getDivisors(number) {
  const divisorList = []
  // 절반의 약수만 구한다.
  // 나머지 절반의 약수들은 여기서 구한 절반의 약수들을 이용하여 구할 수 있다.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisorList.push(i)
    }
  }
  return divisorList
}

function solution(brown, yellow) {
  const totalSpace = brown + yellow
  const divisors = getDivisors(totalSpace)

  for (let i = divisors.length - 1; i >= 0; i--) {
    let height = divisors[i]
    let width = totalSpace / height

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height]
    }
  }
}
