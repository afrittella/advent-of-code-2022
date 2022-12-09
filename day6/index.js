const areCharactersUnique = (input, start, charNum) => {
  const selection = Array.from(new Set(input.slice(start, start+charNum)))

  return selection.length === charNum;
}

export const processFirstPart = (lines) => {
  const input = lines[0].split('')

  for (let i = 0; i < input.length; i++) {
    if (areCharactersUnique(input, i, 4)) {
      return i+4
    }
  }

  throw Error('Marker not found!')
}

export const processSecondPart = (lines) => {
  const input = lines[0].split('')

  for (let i = 0; i < input.length; i++) {
    if (areCharactersUnique(input, i, 14)) {
      return i+14
    }
  }

  throw Error('Marker not found!')
}
