const {solver} = require('./a')

test('example 1', () => {
  const n = 1
  expect(solver({n})).toBe(0)
})

test('example 2', () => {
  const n = 12
  expect(solver({n})).toBe(3)
})

test('example 3', () => {
  const n = 23
  expect(solver({n})).toBe(2)
})

test('example 4', () => {
  const n = 1024
  expect(solver({n})).toBe(31)
})

test('other 1', () => {
  const n = 21
  expect(solver({n})).toBe(4)
})

test('other 2', () => {
  const n = 19
  expect(solver({n})).toBe(2)
})

test('other 3', () => {
  const n = 13
  expect(solver({n})).toBe(4)
})

test('other 4', () => {
  const n = 961
  expect(solver({n})).toBe(30)
})
