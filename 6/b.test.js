const {solver} = require('./b')

test('example 1', () => {
  const data = '0\t2\t7\t0'
  expect(solver({data})).toBe(4)
})

