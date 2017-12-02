const solver = ({data}) => {
  return data
    .split('\n')
    .filter(a => a)
    .map(row => 
      row
        .split('\t')
        .map(n => +n)
        .map((n, i, all) => all.find((m, j) => j !== i && m % n === 0)/n)
        .find(n => n)
    )
    .reduce((sum, n) => sum + n)
}

module.exports = {
  solver
}
