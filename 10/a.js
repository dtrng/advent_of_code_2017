const solver = ({data, N}) => {
  let tmp = []
  tmp[N - 1] = 0
  const nums = tmp.fill(0).map((x, i) => i)
  let position = 0
  data.split(',').map(x => +x).forEach((length, skip) => {
    for (let i = position; i < Math.floor(position + length / 2); i++) {
      const start = i % N
      const end = (2 * position + length - 1 - i) % N
      const temp = nums[start]
      nums[start] = nums[end]
      nums[end] = temp
    }
    position = (position + skip + length) % N
  })
  return nums[0] * nums[1]
}

module.exports = {
  solver,
}
