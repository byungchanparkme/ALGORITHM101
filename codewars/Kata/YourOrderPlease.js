// Your Order, please
// 문제 출처 : https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript 
// Sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. 
// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
function order(words){
  if (!words.length) return '';
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/)[0] - b.match(/\d/)[0])
    .join(' ');
}