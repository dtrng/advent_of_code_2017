const ops = {
  n: ({x, y}) => ({x, y: y + 1}),
  ne: ({x, y}) => ({x: x + 1, y: y + (x % 2 === 0 ? 0 : 1)}),
  se: ({x, y}) => ({x: x + 1, y: y + (x % 2 === 0 ? -1 : 0)}),
  s: ({x, y}) => ({x, y: y - 1}),
  sw: ({x, y}) => ({x: x - 1, y: y + (x % 2 === 0 ? -1 : 0)}),
  nw: ({x, y}) => ({x: x - 1, y: y + (x % 2 === 0 ? 0 : 1)}),
}
const solver = ({data}) => {
  const {x, y} = data
    .split(',')
    .reduce(({x, y}, dir) => {
      return ops[dir]({x, y})
    }, {x: 0, y: 0})
  return Math.abs(x) + Math.max(Math.abs(y) - Math.floor((Math.abs(x) + (y >= 0 ? 0 : x % 2 === 0 ? 0 : 1)) / 2), 0)
}

module.exports = {
  solver,
}
