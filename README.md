# pairwise

Chunk an array by successive pairs.
E.g. `pairwise([1, 2, 3, 4])` yields `[[1, 2], [2, 3], [3, 4]]`.

## Installing / Getting started

`npm i pairwise`

## Example

```js
const pairwise = require('pairwise');
const chunks = pairwise([1, 2, 3, 4, 5]);
```