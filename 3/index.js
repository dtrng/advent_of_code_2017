'use strict'
const fs = require('fs')
const {solver: solveA} = require('./a')
const {solver: solveB} = require('./b')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  const onlyDigits = data.replace(/\r?\n|\r/g, '')
  console.log('solution to a:', solveA({n: +onlyDigits}))
  console.log('solution to a:', solveB({n: +onlyDigits}))
})
