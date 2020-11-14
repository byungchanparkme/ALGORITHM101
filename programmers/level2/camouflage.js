// input : 의상들이 담긴 2차원 배열
// 각 요소는 [의상의 이름, 의상의 종류] 형태
// return : 서로 다른 옷의 조합의 수

function solution(clothes) {
  const closet = clothes.reduce((acc, curr) => {
    acc[curr[1]] = acc[curr[1]] ? acc[curr[1]] + 1 : 1
    return acc
  }, {})
  const items = Object.values(closet)
  if (items.length === 1) {
    return items[0]
  }
  // 어떤 종류의 옷은 입지 않은 경우의 수 포함
  let answer = items.reduce((acc, curr) => acc * (curr + 1), 1) - 1
  return answer
}
