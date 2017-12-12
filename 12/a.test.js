const {solver} = require('./a')

test('example 1', () => {
  const data =
    '0 <-> 2\n' +
    '1 <-> 1\n' +
    '2 <-> 0, 3, 4\n' +
    '3 <-> 2, 4\n' +
    '4 <-> 2, 3, 6\n' +
    '5 <-> 6\n' +
    '6 <-> 4, 5\n'
  expect(solver({data})).toBe(6)
})
