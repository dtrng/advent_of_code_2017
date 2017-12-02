const {solver} = require('./a')

test('example 1', () => {
  const data = '5\t1\t9\t5\n'
  expect(solver({data})).toBe(8)
})

test('example 2', () => {
  const data = '7\t5\t3\n'
  expect(solver({data})).toBe(4)
})

test('example 3', () => {
  const data = '2\t4\t6\t8\n'
  expect(solver({data})).toBe(6)
})

test('example 4', () => {
  const data = '5\t1\t9\t5\n'
    + '7\t5\t3\n'
    + '2\t4\t6\t8\n'
  expect(solver({data})).toBe(18)
})
