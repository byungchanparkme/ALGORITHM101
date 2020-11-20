// Credit Card Mask
// 문제 출처 : https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript
// Write a function maskify, which changes all but the last four characters into '#'.
// return masked string
// 나의 풀이
function maskify(cc) {
  if (cc.length < 5) return cc
  return cc.slice(0, -4).replace(/\w/g, "#") + cc.slice(-4)
}

// clever answer
const maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4)
