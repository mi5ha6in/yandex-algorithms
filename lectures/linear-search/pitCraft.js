/*
Игра PitCraft происходит в двумерном мире,
который состоит из блоков размером 1 на 1 метр.
Остров игрока представляет собой набор столбцов различной высоты,
состоящих из блоков камня и окруженных морем.
Над островом прошел сильный дождь, который затопил водой все низины,
а не поместившаяся в них вода стекла в море, не увеличив его уровень.

По ландшафту острова определите, сколько блоков воды осталось после
дождя в низинах на острове.
*/

const islandHeights = [3, 1, 4, 3, 5, 1, 1, 3, 1];
function getAmountWater (islandHeights) {
  let maxPosition = 0;
  for (let i = 1; i < islandHeights.length; i++) {
    if (islandHeights[i] > islandHeights[maxPosition]) {
      maxPosition = i;
    }
  }
  let answer = 0;
  let newPeak = 0;
  for (let i = 0; i < maxPosition; i++) {
    if (islandHeights[i] > newPeak) {
      newPeak = islandHeights[i]
    }
    answer += newPeak - islandHeights[i]
  }
  newPeak = 0;
  for (let i = islandHeights.length - 1; i > maxPosition; i--) {
    if (islandHeights[i] > newPeak) {
      newPeak = islandHeights[i]
    }
    answer += newPeak - islandHeights[i]
  }
  return answer
}

const answer = getAmountWater(islandHeights)
console.log(answer)