module.exports = array => {
  const n = array.length;
  return array.reduce((acc, x, i) => {
    if (i + 1 < n) {
      acc.push([x, array[i + 1]]);
    }
    return acc;
  }, []);
};
