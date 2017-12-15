const {solver} = require('./a')

test('example 1', () => {
  const data =
    '0: 3\n' +
    '1: 2\n' +
    '4: 4\n' +
    '6: 4\n'
  expect(solver({data})).toBe(24)
})
