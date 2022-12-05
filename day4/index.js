const isContained = (first, second) =>
  parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1])

const overlaps = (first, second) =>
  (parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[0]) <= parseInt(second[1])) ||
  (parseInt(first[1]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1]))  

export const processFirstPart = (lines) => {
  let acc = 0

  for (const line of lines) {
    if (line !== '') {
      const assignments = line.split(',').map((a) => a.split('-'))

      if (isContained(assignments[0], assignments[1]) || isContained(assignments[1], assignments[0])) {
        acc++
      }
    }
  }

  return acc
}

export const processSecondPart = (lines) => {
  let acc = 0

  for (const line of lines) {
    if (line !== '') {
      const assignments = line.split(',').map((a) => a.split('-'))

      if (overlaps(assignments[0], assignments[1]) || overlaps(assignments[1], assignments[0])) {
        acc++
      }
    }
  }

  return acc
}
