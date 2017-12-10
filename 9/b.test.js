const {solver} = require('./b')

test('example 1', () => {
  const data = '<>'
  expect(solver({data})).toBe(0)
})

test('example 2', () => {
  const data = '<random characters>'
  expect(solver({data})).toBe(17)
})

test('example 3', () => {
  const data = '<<<<>'
  expect(solver({data})).toBe(3)
})

test('example 4', () => {
  const data = '<{!>}>'
  expect(solver({data})).toBe(2)
})

test('example 5', () => {
  const data = '<!!>'
  expect(solver({data})).toBe(0)
})

test('example 6', () => {
  const data = '<!!!>>'
  expect(solver({data})).toBe(0)
})

test('example 7', () => {
  const data = '<{o"i!a,<{i<a>'
  expect(solver({data})).toBe(10)
})
