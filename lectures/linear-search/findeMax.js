// Найти наибольшее число в последовательности

const sequence = [1, 2, 3, 1, 2];

function findMax(sequence) {
  let answer = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > answer) {
      answer = sequence[i];
    }
  }
  return answer;
}

console.log(findMax(sequence));
