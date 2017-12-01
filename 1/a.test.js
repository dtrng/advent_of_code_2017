const {solver} = require('./a')

test('example 1', () => {
  expect(solver({data: '1122'})).toBe(3)
})

test('example 2', () => {
  expect(solver({data: '1111'})).toBe(4)
})

test('example 3', () => {
  expect(solver({data: '1234'})).toBe(0)
})

test('example 4', () => {
  expect(solver({data: '91212129'})).toBe(9)
})
