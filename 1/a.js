const solver = ({data}) => {
  const oneOff = (data.substring(1) + data.substring(0, 1)).split('')
  return data
    .split('')
    .map(c => [c, oneOff.shift()])
    .filter(pair => pair[0] === pair[1])
    .map(pair => pair[0])
    .reduce((sum, digit) => sum + +digit, 0)
}

module.exports = {
  solver,
}
