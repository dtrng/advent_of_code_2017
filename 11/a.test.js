const {solver} = require('./a')

test('example 1', () => {
  const data = 'ne,ne,ne'
  expect(solver({data})).toBe(3)
})

test('example 2', () => {
  const data = 'ne,ne,sw,sw'
  expect(solver({data})).toBe(0)
})

test('example 3', () => {
  const data = 'ne,ne,s,s'
  expect(solver({data})).toBe(2)
})

test('example 4', () => {
  const data = 'se,sw,se,sw,sw'
  expect(solver({data})).toBe(3)
})

test('diagonal ne', () => {
  const data = 'ne,ne,ne,ne,ne'
  expect(solver({data})).toBe(5)
})

test('diagonal se', () => {
  const data = 'se,se,se,se,se'
  expect(solver({data})).toBe(5)
})

test('diagonal sw', () => {
  const data = 'sw,sw,sw,sw,sw'
  expect(solver({data})).toBe(5)
})

test('diagonal nw', () => {
  const data = 'nw,nw,nw,nw,nw'
  expect(solver({data})).toBe(5)
})

test('special 1', () => {
  const data = 'sw,sw,sw,s'
  expect(solver({data})).toBe(4)
})

test('special 2', () => {
  const data = 'nw,nw,n'
  expect(solver({data})).toBe(3)
})

test('special 3', () => {
  const data = 'nw,nw,n,n,n'
  expect(solver({data})).toBe(5)
})

test('special 4', () => {
  const data = 'nw,n'
  expect(solver({data})).toBe(2)
})

test('special 4', () => {
  const data = 'nw,nw,nw,n,n'
  expect(solver({data})).toBe(5)
})
