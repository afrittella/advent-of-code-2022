const elves = []

export const processFirstPart = (lines) => {
  let acc = 0

  for (const line of lines) {
    const num = parseInt(line)

    if (isNaN(num)) {
      if (acc > 0) {
        elves.push(acc)
      }

      acc = 0
    } else {
      acc += num
    }
  }

  elves.sort((a, b) => b - a)

  return elves[0]
}

export const processSecondPart = (lines) => {
  return elves[0] + elves[1] + elves[2]
}
