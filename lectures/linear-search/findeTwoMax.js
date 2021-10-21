const sequence = [0, 5, 3, 2, 1];

function findeTwoMax(sequence) {
  let max1 = Math.max(sequence[0], sequence[1]);
  let max2 = Math.min(sequence[0], sequence[1]);

  for (let i = 2; i < sequence.length; i++) {
    if (sequence[i] > max1) {
      max2 = max1;
      max1 = sequence[i];
    } else if (sequence[i] > max2) {
      max2 = sequence[i];
    }
  }
  return [max1, max2];
}

console.log(findeTwoMax(sequence));
