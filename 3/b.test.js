const {solver} = require('./b')

test('example 1', () => {
  const n = 807
  expect(solver({n})).toBe(880)
})

test('example 2', () => {
  const n = 881
  expect(solver({n})).toBe(931)
})

test('example 3', () => {
  const n = 932
  expect(solver({n})).toBe(957)
})

test('example 4', () => {
  const n = 958
  expect(solver({n})).toBe(1968)
})
