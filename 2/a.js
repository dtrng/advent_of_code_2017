const solver = ({data}) => {
  return data
    .split('\n')
    .filter(a => a)
    .map(row => {
      const sortedNumbers = row
        .split('\t')
        .map(n => +n)
        .sort((a, b) => a - b)
      return sortedNumbers.pop() - sortedNumbers.shift()
    })
    .reduce((sum, diff) => sum + diff)
}

module.exports = {
  solver,
}
