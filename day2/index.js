/**
 * My bet
 * X => Rock => 1
 * Y => Paper => 2
 * Z => Scissor => 3
 *
 * Elf bet
 * A => Rock
 * B => Paper
 * C => Scissor
 *
 * Round
 * WIN => 6
 * LOST => 0
 * DRAW => 3
 *
 */

const elves = []

const X = 1
const Y = 2
const Z = 3

const WIN = 6
const DRAW = 3
const LOST = 0

const gameMap = {
  DRAW: ['AX', 'BY', 'CZ'],
  WIN: ['AY', 'BZ', 'CX'],
  LOST: ['AZ', 'BX', 'CY'],
}

const trickMap = {
  X: 'LOST',
  Y: 'DRAW',
  Z: 'WIN',
}

const roundMap = {
  AX: DRAW + X,
  AY: WIN + Y,
  AZ: LOST + Z,
  BX: LOST + X,
  BY: DRAW + Y,
  BZ: WIN + Z,
  CX: WIN + X,
  CY: LOST + Y,
  CZ: DRAW + Z,
}

export const processFirstPart = (lines) => {
  let acc = 0

  for (let line of lines) {
    const bets = line.split(' ').join('')

    if (bets.length === 2) {
      acc += roundMap[bets]
    }
  }

  return acc
}

export const processSecondPart = (lines) => {
  let acc = 0

  for (let line of lines) {
    const bets = line.split(' ')

    if (bets.length === 2) {
      const betTrick = gameMap[trickMap[bets[1]]].find((i) => i.startsWith(bets[0]))

      acc += roundMap[betTrick]
    }
  }

  return acc
}
