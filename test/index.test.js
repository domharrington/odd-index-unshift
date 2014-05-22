var oddIndexUnshift = require('../')
  , assert = require('assert')

describe('odd-index-unshift', function () {

  it('should unshift the odd index items of an array', function () {
    assert.deepEqual(oddIndexUnshift([ 1, 2 ]), [ 1, 2 ])
    assert.deepEqual(oddIndexUnshift([ 1, 2, 3, 4 ]), [ 1, 3, 2, 4 ])
    assert.deepEqual(oddIndexUnshift([ 1, 2, 3, 4, 5, 6 ]), [ 1, 3, 5, 2, 4, 6 ])
  })

})
