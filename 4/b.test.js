const {solver} = require('./b')

test('example 1', () => {
  const data = 'abcde fghij\n'
  expect(solver({data})).toBe(1)
})

test('example 2', () => {
  const data = 'abcde xyz ecdab\n'
  expect(solver({data})).toBe(0)
})

test('example 3', () => {
  const data = 'a ab abc abd abf abj\n'
  expect(solver({data})).toBe(1)
})

test('example 4', () => {
  const data = 'iiii oiii ooii oooi oooo\n'
  expect(solver({data})).toBe(1)
})

test('example 5', () => {
  const data = 'oiii ioii iioi iiio\n'
  expect(solver({data})).toBe(0)
})

