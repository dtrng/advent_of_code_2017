const solver = ({data}) => {
  const programs = data.split('\n')
    .map(l => {
      const [program, ...connections] = l.replace(' <-> ', ', ').split(', ').map(n => +n)
      return {[program]: connections}
    })
    .reduce((acc, p) => Object.assign({}, p, acc), {})

  let groups = 0
  while (Object.keys(programs).length) {
    filterProgramsInGroup({programs, program: Object.keys(programs).pop()})
    groups++
  }
  return groups
}

function filterProgramsInGroup ({programs, program}) {
  if (!programs[program]) {
    return
  }

  const connections = programs[program]
  delete programs[program]
  connections.map(p => filterProgramsInGroup({programs, program: p}))
}

module.exports = {
  solver,
}
