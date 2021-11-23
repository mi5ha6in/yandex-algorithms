/*
AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBB
Написать функцию RLE, которая на выходе даст строку вида:
A4B3C2XYZD4E3F3A6B7
*/
const string = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBB";

function rle(string) {
  function pack(symbol, count) {
    if (count > 1) {
      return symbol + count;
    }
    return symbol;
  }
  let lastSymbol = string[0];
  let lastPosition = 0;
  let answer = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== lastSymbol) {
      answer.push(pack(lastSymbol, i - lastPosition));
      lastPosition = i;
      lastSymbol = string[i];
    }
  }
  answer.push(pack(string[lastPosition], string.length - lastPosition));
  return answer.join("");
}

console.log(rle(string));
