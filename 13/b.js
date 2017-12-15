const solver = ({data}) => {
  const map = data
    .split('\n')
    .filter(x => x)
    .map(r => r.split(': ').map(x => +x))
  let getsCaught = true
  let delay = -1
  while (getsCaught) {
    delay++
    getsCaught = map.find(([range, depth]) => (delay + range) % (2 * (depth - 1)) === 0)
  }
  return delay
}

module.exports = {
  solver,
}
