// 다리를 지나는 트럭
// 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42583
// input : 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights
// output : 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지?
// 구하는 방법
// 1. 매 초마다 다리를 건너려는 트럭들의 무게 합과 다리가 견딜 수 있는 무게를 비교해야 한다.
// 2. 대기 중인 트럭이 건널 수 없는 상황이면, 다리 위에 있는 트럭이 다리를 건널 때까지 대기해야 한다.

function solution(bridge_length, weight, truck_weights) {
  let time = 0
  let queue = []
  let currentWeight = 0

  for (let i = 0; i < bridge_length; i++) {
    queue.push(0)
  }

  let now_truck = truck_weights.shift()
  queue.unshift(now_truck)
  queue.pop()
  currentWeight += now_truck
  time++

  while (currentWeight) {
    currentWeight -= queue.pop()
    now_truck = truck_weights.shift()
    if (currentWeight + now_truck <= weight) {
      queue.unshift(now_truck)
      currentWeight += now_truck
    } else {
      queue.unshift(0)
      truck_weights.unshift(now_truck)
    }
    time++
  }

  return time
}
