const solver = ({data}) => {
  return data
    .split('\n')
    .filter(p => p)
    .map(passphrase =>
      passphrase
        .split(' ')
        .reduce((acc, word) => {
          acc[word] = acc[word] ? acc[word] + 1 : 1
          acc._valid = acc._valid && acc[word] <= 1
          return acc
        }, {_valid: true})
        ._valid
    )
    .reduce((sum, valid) => valid ? sum + 1 : sum, 0)
}

module.exports = {
  solver,
}
