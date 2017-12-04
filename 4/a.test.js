const {solver} = require('./a')

test('example 1', () => {
  const data = 'aa bb cc dd ee\n'
  expect(solver({data})).toBe(1)
})

test('example 2', () => {
  const data = 'aa bb cc dd aa\n'
  expect(solver({data})).toBe(0)
})

test('example 3', () => {
  const data = 'aa bb cc dd aaa\n'
  expect(solver({data})).toBe(1)
})

test('other 1', () => {
  const data = 'aa bb cc dd ee\n' +
    'aa bb cc dd aa\n' +
    'aa bb cc dd aaa\n'
  expect(solver({data})).toBe(2)
})

test('other 2', () => {
  const data = 'aa bb cc aa dd aaa\n'
  expect(solver({data})).toBe(0)
})
