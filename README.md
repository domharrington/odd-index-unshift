# odd-index-unshift

Unshift the odd index items of an array

[![build status](https://secure.travis-ci.org/domharrington/odd-index-unshift.png)](http://travis-ci.org/domharrington/odd-index-unshift)

## Installation

```
npm install odd-index-unshift --save
```

## Usage
```js
var oddIndexUnshift = require('./')

console.log(oddIndexUnshift([ 1, 2, 3, 4, 5, 6 ]))
// Equals => [ 1, 3, 5, 2, 4, 6 ]
```

### `var oddUnshiftedArray = oddIndexUnshift(array)`

Options must include:

- `array` - an array to unshift

## Credits
[Dom Harrington](https://github.com/domharrington/)
