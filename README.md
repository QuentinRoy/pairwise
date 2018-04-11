# pairwise
[![Build Status](https://travis-ci.org/QuentinRoy/pairwise.svg?branch=master)](https://travis-ci.org/QuentinRoy/pairwise)
[![codecov](https://img.shields.io/codecov/c/github/QuentinRoy/pairwise.svg)](https://codecov.io/gh/QuentinRoy/pairwise)
[![dependencies Status](https://david-dm.org/quentinroy/pairwise/status.svg)](https://david-dm.org/quentinroy/pairwise)
[![devDependencies Status](https://david-dm.org/quentinroy/pairwise/dev-status.svg)](https://david-dm.org/quentinroy/pairwise?type=dev)
[![NPM version](https://img.shields.io/npm/v/pairwise.svg)](https://www.npmjs.com/package/pairwise)


Chunk an array into successive pairs.
E.g. `pairwise([1, 2, 3, 4])` yields `[[1, 2], [2, 3], [3, 4]]`.

## Installing / Getting started

`npm i pairwise`

## Example

```js
const pairwise = require('pairwise');
const chunks = pairwise([1, 2, 3, 4, 5]);
```
