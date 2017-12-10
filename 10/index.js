'use strict'
const fs = require('fs')
const {solver: solveA} = require('./a')
const {solver: solveB} = require('./b')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  data = data.split('\n')[0]
  console.log('solution to a:', solveA({data, N: 256}))
  console.log('solution to b:', solveB({data}))
})
