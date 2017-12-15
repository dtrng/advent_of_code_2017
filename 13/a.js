const solver = ({data}) => {
  return data
    .split('\n')
    .filter(x => x)
    .map(r => r.split(': '))
    .reduce((severity, [range, depth]) => {
      severity += range % (2 * (depth - 1)) === 0 ? range * depth : 0
      return severity
    }, 0)
}

module.exports = {
  solver,
}
