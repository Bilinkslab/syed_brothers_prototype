function find(collection, key, val) {
  const res = [];
  for (let i of collection) {
    if (i[key] === val) {
      res.push(i);
    }
  }
  return res;
}

function findOne(collection, key, val) {
  for (let i of collection) {
    if (i[key] == val) {
      return i;
    }
  }
  return null;
}

module.exports = {
  find,
  findOne,
};
