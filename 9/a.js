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
        }
      } else {
        if (char === '<') {
          acc.inGarbage = true
        } else if (char === '{') {
          acc.groupLevel++
        } else if (char === '}') {
          acc.score += acc.groupLevel
          acc.groupLevel--
        }
      }
      return acc
    }, {groupLevel: 0, inGarbage: false, ignore: false, score: 0})
    .score
}

module.exports = {
  solver,
}
