const solver = ({n}) => {
  let r = Math.floor(Math.sqrt(n))
  r -= r % 2 === 0 ? 1 : 0
  const outward = (r - 1) / 2 + (n > r * r ? 1 : 0)
  const orthogonal = n > r * r ? Math.abs(((n - r * r) % (r + 1)) - (r + 1) / 2) : (r - 1) / 2
  return outward + orthogonal
}

module.exports = {
  solver,
}
