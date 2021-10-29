// Найти наибольшее число в последовательности

const sequence = [1, 2, 3, 1, 2];

function findeMax(sequence) {
  let answer = sequence[0];

  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > answer) {
      answer = sequence[i];
    }
  }
  return answer;
}

console.log(findeMax(sequence));
