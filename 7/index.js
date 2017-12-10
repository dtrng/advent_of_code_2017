'use strict'
const fs = require('fs')
const {solver: solveA} = require('./a')
const {solver: solveB} = require('./b')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const data2 = 'pbga (66)\n\
xhth (57)\n\
ebii (61)\n\
havc (66)\n\
ktlj (57)\n\
fwft (72) -> ktlj, cntj, xhth\n\
qoyq (66)\n\
padx (45) -> pbga, havc, qoyq\n\
tknk (41) -> ugml, padx, fwft\n\
jptl (61)\n\
ugml (68) -> gyxo, ebii, jptl\n\
gyxo (61)\n\
cntj (57)'
  console.log('solution to a:', solveA({data}))
  console.log('solution to b:', solveB({data: data}))
})
