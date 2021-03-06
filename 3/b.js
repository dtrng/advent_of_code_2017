const solver = ({n}) => {
  const nums = [0, 1, 1, 2, 4, 5, 10, 11, 23]
  let pVal = nums[nums.length - 1]
  for (let i = 1; ; i += 2) {
    // square on down-right diagonal and the two following squares
    pVal = pVal + nums[i * i] + nums[i * i + 1]
    nums.push(pVal)
    let ppVal = pVal
    pVal = pVal + nums[i * i + 1]
    nums.push(pVal)
    pVal = pVal + ppVal + nums[i * i + 1] + nums[i * i + 2]
    nums.push(pVal)

    // All squares not at or adjacent to down-right diagnonal
    for (let j = 2; j < 4 * (i + 1); j++) {
      // If going into corner
      if (j % (i + 1) === 0) {
        // number before corner
        pVal = pVal + nums[i * i + j] + nums[i * i + j - 1]
        nums.push(pVal)
        ppVal = pVal

        // in corner
        pVal = pVal + nums[i * i + j]
        nums.push(pVal)

        // number after corner
        pVal = pVal + ppVal + nums[i * i + j] + nums[i * i + j + 1]
        nums.push(pVal)
      } else {
        pVal = pVal + nums[i * i + j - 1] + nums[i * i + j] + nums[i * i + j + 1]
        nums.push(pVal)
      }
    }

    // square to the left of square on down-right diagonal
    const nextI = (i + 2) * (i + 2)
    pVal = pVal + nums[nextI - 1] + nums[nextI] + nums[nextI + 1]
    nums.push(pVal)

    if (pVal > n) {
      return nums.find(d => d > n)
    }
  }
}

module.exports = {
  solver,
}
