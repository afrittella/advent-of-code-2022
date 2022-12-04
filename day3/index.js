let alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet += alphabet.toUpperCase()
alphabet = alphabet.split('')

export const processFirstPart = (lines) => {
  let acc = 0

  for (const line of lines) {
    if (line !== '') {
      const half = line.length / 2
      const parts = [line.substring(0, half).split(''), line.substring(half).split('')]

      for (const letter of parts[0]) {
        if (parts[1].find((p) => p === letter)) {
          const priority = alphabet.findIndex((l) => l === letter) + 1
          acc += priority
          break
        }
      }
    }
  }

  return acc
}

export const processSecondPart = (lines) => {
  let acc = 0
  let i = 0
  while (i < lines.length) {
    for (const letter of lines[i]) {
      const parts = [lines[i + 1].split(''), lines[i + 2].split('')]

      if (parts[0].find((p) => p === letter) && parts[1].find((p) => p === letter)) {
        const priority = alphabet.findIndex((l) => l === letter) + 1
        acc += priority
        break
      }
    }
    i += 3
  }

  return acc
}
