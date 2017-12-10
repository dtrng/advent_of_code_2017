const solver = ({data}) => {
  return data
    .split('')
    .reduce((acc, char) => {
      if (acc.ignore) {
        acc.ignore = false
      } else if (acc.inGarbage) {
        if (char === '>') {
          acc.inGarbage = false
        } else if (char === '!') {
          acc.ignore = true
        } else {
          acc.removedChars++
        }
      } else if (char === '<') {
        acc.inGarbage = true
      }
      return acc
    }, {groupLevel: 0, inGarbage: false, ignore: false, removedChars: 0})
    .removedChars
}

module.exports = {
  solver,
}
