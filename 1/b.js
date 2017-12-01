const solver = ({data}) => {
  const otherSide = (data.substring(data.length / 2) + data.substring(0, data.length / 2)).split('')
  return data
    .split('')
    .map(c => [c, otherSide.shift()])
    .filter(pair => pair[0] === pair[1])
    .map(pair => pair[0])
    .reduce((sum, digit) => sum + +digit, 0)
}

module.exports = {
  solver,
}
