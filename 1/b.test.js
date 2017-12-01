const {solver} = require('./b')

test('example 1', () => {
  expect(solver({data: '1212'})).toBe(6)
})

test('example 2', () => {
  expect(solver({data: '1221'})).toBe(0)
})

test('example 3', () => {
  expect(solver({data: '123425'})).toBe(4)
})

test('example 4', () => {
  expect(solver({data: '123123'})).toBe(12)
})

test('example 5', () => {
  expect(solver({data: '12131415'})).toBe(4)
})

