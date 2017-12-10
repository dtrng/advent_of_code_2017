const {solver} = require('./b')

test('example 1', () => {
  const data = ''
  expect(solver({data})).toBe('a2582a3a0e66e6e86e3812dcb672a272')
})

test('example 2', () => {
  const data = 'AoC 2017'
  expect(solver({data})).toBe('33efeb34ea91902bb2f59c9920caa6cd')
})

test('example 3', () => {
  const data = '1,2,3'
  expect(solver({data})).toBe('3efbe78a8d82f29979031a4aa0b16a9d')
})

test('example 4', () => {
  const data = '1,2,4'
  expect(solver({data})).toBe('63960835bcdc130f0b66d7ff4f6a5a8e')
})

