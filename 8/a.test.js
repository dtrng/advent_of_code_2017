const {solver} = require('./a')

test('example 1', () => {
  const data = 'b inc 5 if a > 1\n' +
    'a inc 1 if b < 5\n' +
    'c dec -10 if a >= 1\n' +
    'c inc -20 if c == 10\n'
  expect(solver({data})).toBe(1)
})

