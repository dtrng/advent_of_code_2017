const {solver} = require('./a')

test('example 1', () => {
  const data = '{}'
  expect(solver({data})).toBe(1)
})

test('example 2', () => {
  const data = '{{{}}}'
  expect(solver({data})).toBe(6)
})

test('example 3', () => {
  const data = '{{},{}}'
  expect(solver({data})).toBe(5)
})

test('example 4', () => {
  const data = '{{{},{},{{}}}}'
  expect(solver({data})).toBe(16)
})

test('example 5', () => {
  const data = '{<a>,<a>,<a>,<a>}'
  expect(solver({data})).toBe(1)
})

test('example 6', () => {
  const data = '{{<ab>},{<ab>},{<ab>},{<ab>}}'
  expect(solver({data})).toBe(9)
})

test('example 7', () => {
  const data = '{{<!!>},{<!!>},{<!!>},{<!!>}}'
  expect(solver({data})).toBe(9)
})

test('example 8', () => {
  const data = '{{<a!>},{<a!>},{<a!>},{<ab>}}'
  expect(solver({data})).toBe(3)
})
