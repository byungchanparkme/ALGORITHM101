// 구명보트
// 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42885
// input : 사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit
// output : 필요한 구명보트 개수의 최솟값

// 1번째 방법
// 1. 몸무게를 기준으로 내림차순으로 정렬한다.
// 2. 가장 무거운 사람과 가장 가벼운 사람의 무게 합을 limit과 비교한다.
//   2-1. limit보다 큰 경우 무거운 사람 먼저 보트에 태워 보내고,
//   2-2. limit보다 작거나 같은 경우라면 두 명을 함께 보트에 태워 보낸다.
// 3. 이 과정을 모든 사람이 탈 때까지 반복한다.
// 4. 혼자 탑승한 보트를 위해 boats += 1
// 5. 함께 탑승한 보트를 위해 boats += 1

function solution(people, limit) {
  let boats = 0
  // 내림차순 정렬
  people.sort((a, b) => a - b)

  while (people.length) {
    // 가장 무거운 사람부터
    let now_person = people.pop()
    let remain = limit - now_person

    // 가장 가벼운 사람과 비교
    if (people[0] <= remain) remain -= people.shift()
    boats += 1
  }
  return boats
}

// 2번째 방법
// 1. people을 내림차순으로 정렬한다.
// 2. 첫 번째 사람(가장 가벼운 사람)과 마지막 사람(가장 무거운 사람)의 무게를 더한다.
//   2-1. limit을 넘는다면 가장 무거운 사람만 보트에 태우기 때문에 다음 수로 향하도록 r--한다.
//   2-2. limit을 넘지 않는다면 둘 다 보트에 태우기 때문에 양끝에서 다음 수로 향하도록 l++, r--한다.
// 3. 혼자 탑승한 보트를 위해 boats += 1
// 4. 함께 탑승한 보트를 위해 boats += 1

function solution(people, limit) {
  let boats = 0
  people.sort((a, b) => a - b)
  let l = 0
  let r = people.length - 1
  while (l <= r) {
    if (people[l] + people[r] <= limit) {
      l++
      r--
    } else {
      r--
    }
    boats += 1
  }
  return boats
}
