module.exports = array => {
  const res = [];

  for(let i = 0, j = 1; j < array.length; i++, j++) {
    res.push([array[i], array[j]]);
  }

  return res;
};
