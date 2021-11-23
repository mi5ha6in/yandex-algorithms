// Найти первое вхождение элемента Х в массиве

const arr = [1, 2, 54, 2, 7, 10, 3, 7, 8 ]

function findX (seq, x) {
  let answer = -1

  for (let i = 0; i < seq.length; i++) {
    if (answer === -1 && seq[i] === x) {
      answer = i
    }
  }
  return answer
}

const findXVer2 = (seq, x) => seq.findIndex(item => item === x)
const findXVer3 = (seq, x) => seq.indexOf(x)

console.log(findX(arr, 7))
console.log(findXVer2(arr, 7))
console.log(findXVer3(arr, 7))
