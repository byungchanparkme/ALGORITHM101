// Playing with Digits
// 문제 출처 : https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// 여기서 a, b, c는 주어진 정수 n의 각 자리의 숫자들이다.
// If it is the case we will return k, if not return -1.
// n, p는 항상 양의 정수이다.
function digPow(n, p) {
  // 주어진 숫자를 문자열로 만들고 이들을 하나씩 분리한다.
  let k = ("" + n).split("").reduce((acc, curr) => acc + Number(curr) ** p++, 0) / n
  return k === Math.floor(k) ? k : -1
}

// clever answer
function digPow(n, p) {
  // [...String(n)] === String(n).split("")
  const x = [...String(n)].reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

// string을 array로 split하지 않는 방법
function digPow(n, p) {
  const x = Array.prototype.reduce.call(String(n), (s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}
