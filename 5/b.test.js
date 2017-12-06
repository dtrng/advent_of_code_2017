const {solver} = require('./b')

test('example 1', () => {
  const data = '0\n3\n0\n1\n-3\n'
  expect(solver({data})).toBe(10)
})

