const {solver} = require('./a')

test('example 1', () => {
  const data = '3,4,1,5'
  expect(solver({data, N: 5})).toBe(12)
})

