const test = require('ava');
const pairwise = require('./index.js');

test('pairwise', t => {
  t.deepEqual(pairwise([1, 2, 3, 4]), [[1, 2], [2, 3], [3, 4]]);
  t.deepEqual(pairwise([]), []);
  t.deepEqual(pairwise(['foo']), []);
});
