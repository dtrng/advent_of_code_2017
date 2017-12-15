'use strict'
const fs = require('fs')
const {solver: solveA} = require('./a')
const {solver: solveB} = require('./b')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('solution to a:', solveA({data}))
  console.log('solution to b:', solveB({data}))
})
