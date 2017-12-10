const solver = ({data}) => {
  const programs = data
    .split('\n')
    .filter(a => a)
    .map(row => {
      const [, name, weight] = row.match(/([a-z]*)\s\((\d*)\)/)
      const childsString = row.split('->')
      const childs = childsString[1] ? (childsString[1].match(/([a-z]*)/g)).filter(a => a) : []
      return {name, weight, childs}
    })
  const childNames = programs.reduce((childNames, program) => childNames.concat(program.childs), [])
  const rootProgram = programs.find(p => !childNames.includes(p.name))
  return rootProgram.name
}

module.exports = {
  solver,
}
