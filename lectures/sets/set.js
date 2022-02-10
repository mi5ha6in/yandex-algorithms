const LENGTH_SET = 10;
const set = new Array(10).fill([]);
const getHash = (value) => value % LENGTH_SET;

const checkValueInSet = (value) => {
  const hash = getHash(value);
  return set[hash].includes(value)
}

const addItemToSet = (item) => {
  const hash = getHash(item);
  const isExists = set[hash].includes(item)
  if (!isExists) {
    set[hash].push(item)
  }
}

const dellItem = (item) => {
  const hash = getHash(item);
  const isExists = set[hash].includes(item)
  if (isExists) {
    if (set.length > 1) {
      set[hash] = set[set.length]
    } else {
      set[hash] = []
    }
    
  }
}