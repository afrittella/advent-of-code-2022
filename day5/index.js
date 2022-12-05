const stacks = ['GJWRFTZ', 'MWG', 'GHNJ', 'WNCRJ', 'MVQGBSFW', 'CWVDTRS', 'VGZDCNBH', 'CGMNJS', 'LDJCWNPG']

const exp = new RegExp('^move ([0-9]+) from ([0-9]+) to ([0-9]+)$')

const moveItems = (line, stacks, shouldReverse = false) => {
  const [sentence, quantity, fromCrate, toCrate] = line.match(exp)

  const tempStacks = [...stacks]

  const itemsToMove = tempStacks[fromCrate - 1].splice(0, quantity)

  tempStacks[toCrate - 1] = [...(shouldReverse ? itemsToMove.reverse() : itemsToMove), ...tempStacks[toCrate - 1]]

  return [...tempStacks]
}

export const processFirstPart = (lines) => {
  let workingStacks = [...stacks.map((s) => s.split(''))]

  for (const line of lines) {
    if (line !== '') {
      workingStacks = moveItems(line, workingStacks, true)
    }
  }

  return workingStacks.map((s) => s[0]).join('')
}

export const processSecondPart = (lines) => {
  let workingStacks = [...stacks.map((s) => s.split(''))]

  for (const line of lines) {
    if (line !== '') {
      workingStacks = moveItems(line, workingStacks, false)
    }
  }

  return workingStacks.map((s) => s[0]).join('')
}
