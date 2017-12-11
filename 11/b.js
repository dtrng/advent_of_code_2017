const ops = {
  n: ({x, y}) => ({x, y: y + 1}),
  ne: ({x, y}) => ({x: x + 1, y: y + (x % 2 === 0 ? 0 : 1)}),
  se: ({x, y}) => ({x: x + 1, y: y + (x % 2 === 0 ? -1 : 0)}),
  s: ({x, y}) => ({x, y: y - 1}),
  sw: ({x, y}) => ({x: x - 1, y: y + (x % 2 === 0 ? -1 : 0)}),
  nw: ({x, y}) => ({x: x - 1, y: y + (x % 2 === 0 ? 0 : 1)}),
}
const solver = ({data}) => {
  return data
    .split(',')
    .reduce((acc, dir) => {
      const {x, y} = ops[dir](acc)
      const max = Math.abs(x) + Math.max(Math.abs(y) - Math.floor((Math.abs(x) + (y >= 0 ? 0 : x % 2 === 0 ? 0 : 1)) / 2), 0)
      return {x, y, max: max > acc.max ? max : acc.max}
    }, {x: 0, y: 0, max: 0})
    .max
}

module.exports = {
  solver,
}
