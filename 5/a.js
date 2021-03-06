const solver = ({data}) => {
  const instructions = data.split('\n').filter(n => n).map(n => +n)
  let i = 0
  let steps = 0
  while (i < instructions.length) {
    const next = instructions[i] + i
    instructions[i]++
    i = next
    steps++
  }
  return steps
}

module.exports = {
  solver,
}
