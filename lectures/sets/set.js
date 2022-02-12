const LENGTH_SET = 10;
const set = Array.from(Array(LENGTH_SET), () => Array());

const getHash = (value) => value % LENGTH_SET;

const valueExistInSet = (value, hash) => {
  return set[hash].includes(value);
};

const checkExistItemInSet = (item) => {
  const hash = getHash(item);
  return valueExistInSet(item, hash);
};

const addItemToSet = (item) => {
  const hash = getHash(item);
  if (!valueExistInSet(item, hash)) {
    set[hash].push(item);
  }
};

const removeItemFromSet = (item) => {
  const hash = getHash(item);
  const listFromHash = set[hash];
  const indexItem = listFromHash.findIndex((element) => element === item);

  if (indexItem === -1) {
    return;
  }

  listFromHash[indexItem] = listFromHash[listFromHash.length - 1];
  listFromHash.pop();
};
