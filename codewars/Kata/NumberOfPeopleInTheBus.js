// Number of people in the bus
// 2차원 배열이 입력으로 주어졌다.
// 각 요소를 하나씩 지날 때마다 버스 정류장 하나를 지납니다.
// 각 요소 안의 첫 번째 요소는 버스에 탑승하려는 인원의 수를 나타내고,
// 두 번째 요소는 버스에서 내리려는 인원의 수를 나타내고 있다.
// 마지막 버스 정류장을 지난 버스에 남아있는 인원의 수를 결과값으로 반환하면 됩니다.
const number = function (busStops) {
  // 2차원 배열을 1차원 배열로
  const flattened = [].concat(...busStops)
  return flattened.reduce((acc, person, i) => {
    // 짝수 요소의 인덱스는 탑승하려는 인원의 수
    if (i % 2 === 0) acc += person
    // 홀수 요소의 인덱스는 내리려는 인원의 수
    else acc -= person
    return acc
  }, 0)
}

// clever answer
// reduce 메서드 내에서 요소에 접근할 때 구조분해 할당을 이용하여 각 요소들에 접근하엿다.
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0)
