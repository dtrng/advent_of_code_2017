const solver = ({data}) => {
  const programs = data.split('\n')
    .map(l => {
      const [program, ...connections] = l.replace(' <-> ', ', ').split(', ').map(n => +n)
      return {[program]: connections}
    })
    .reduce((acc, p) => Object.assign({}, p, acc), {})
  return programsInGroup({programs, program: 0})
}

function programsInGroup ({programs, program}) {
  if (!programs[program]) {
    return 0
  }

  const connections = programs[program]
  delete programs[program]
  return connections
    .map(p => programsInGroup({programs, program: p}))
    .reduce((sum, c) => sum + c, 1)
}

module.exports = {
  solver,
}
