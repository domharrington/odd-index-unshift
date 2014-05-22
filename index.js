module.exports = oddIndexUnshift

function oddIndexUnshift(array) {
  var clone = array.slice()
    , odds = []
    , evens = []

  clone.map(function (item, i) {
    if (i % 2 !== 1) {
      odds.push(array[i])
    } else {
      evens.push(array[i])
    }
  })

  return odds.concat(evens)
}
