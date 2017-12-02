const {solver} = require('./b')

test('example 1', () => {
  const data = '5\t9\t2\t8\n'
  expect(solver({data})).toBe(4)
})

test('example 2', () => {
  const data = '9\t4\t7\t3\n'
  expect(solver({data})).toBe(3)
})

test('example 3', () => {
  const data = '3\t8\t6\t5\n'
  expect(solver({data})).toBe(2)
})

test('example 4', () => {
  const data = '5\t9\t2\t8\n' +
    '9\t4\t7\t3\n' +
    '3\t8\t6\t5\n'
  expect(solver({data})).toBe(9)
})
