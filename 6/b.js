const solver = ({data}) => {
  const banks = data.split('\t').map(n => +n)
  const configs = {}
  let steps = 0
  while (configs[banks.join('')] === undefined) {
    configs[banks.join('')] = steps
    const maxInd = banks.reduce((ind, bank, i) => bank > banks[ind] ? i : ind, 0)
    let distribute = banks[maxInd]
    banks[maxInd] = 0
    let index = maxInd + 1
    while (distribute > 0) {
      index %= banks.length
      banks[index]++
      distribute--
      index++
    }
    steps++
  }
  return steps - configs[banks.join('')]
}

module.exports = {
  solver,
}
