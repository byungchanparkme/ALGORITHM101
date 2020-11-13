// H-Index 구하기
// 문제 출처 : https://programmers.co.kr/learn/courses/30/lessons/42747 
// input : 논문의 인용횟수를 담은 배열 citations
// output : H-Index
// 구하는 과정
// 1. 배열을 내림차순으로 정렬
// 2. h번 이상 인용된 논문이 h편 이상인 경우 이때의 h를 구한다. 
function solution(citations) {
  // 오름차순 정렬
  citations.sort((a, b) => b-a);
  let index = 0;    
  while (index < citations.length) {
    if ((index + 1) <= citations[index]) {
      index++;
    // citations[index]번 이상 인용된 논문이 citations[index]번 이상인 경우   
    } else {
      break;
    }
  }
  return index;
}