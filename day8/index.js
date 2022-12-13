const hasTallerTrees = (trees, targetIndex, direction) => {
  const target = trees[targetIndex]

  const searchArray = trees.slice(direction > 0 ? targetIndex + 1 : 0, direction > 0 ? trees.length : targetIndex)

  return searchArray.findIndex((t) => t >= target) !== -1
}

const getScore = (trees, targetIndex, direction) => {
  const limit = direction > 0 ? trees.length - 1 : 0
  let i = targetIndex + direction
  const target = trees[targetIndex]
  let count = 0

  while (direction > 0 ? i <= limit : i >= limit) {
    count++
    if (trees[i] >= target) {
      break
    }
    i += direction
  }

  return count
}

const getTotalScore = ({row, column, forest}) => {
  const scores = {
    left: getScore(forest[row], column, -1),
    right: getScore(forest[row], column, 1),
    top: getScore(forest.map((row) => row[column]), row, -1),
    bottom: getScore(forest.map((row) => row[column]), row, 1),
  }

  return scores.top * scores.bottom * scores.left * scores.right
}

const isVisibleRight = ({ row, column, forest }) => hasTallerTrees(forest[row], column, 1) === false

const isVisibleLeft = ({ row, column, forest }) => hasTallerTrees(forest[row], column, -1) === false

const isVisibleBottom = ({ row, column, forest }) =>
  hasTallerTrees(
    forest.map((r) => r[column]),
    row,
    1,
  ) === false

const isVisibleTop = ({ row, column, forest }) =>
  hasTallerTrees(
    forest.map((r) => r[column]),
    row,
    -1,
  ) === false

const isVisible = (config) =>
  isVisibleRight(config) || isVisibleLeft(config) || isVisibleTop(config) || isVisibleBottom(config)

export const processFirstPart = (lines) => {
  const forest = lines.filter((l) => l !== '').map((l) => l.split('').map((l) => parseInt(l)))

  let row = 1
  let column = 1
  let columnEdge = forest[0].length - 2
  let rowEdge = forest.length - 2
  // All trees along the edges are visible
  let visibleCount = (forest.length - 2 + forest[0].length) * 2

  for (let r = row; r <= rowEdge; r++) {
    for (let c = column; c <= columnEdge; c++) {
      const config = {
        row: r,
        column: c,
        forest,
      }

      if (forest[r][c] > 0 && isVisible(config)) {
        visibleCount++
      }
    }
  }

  return visibleCount
}

export const processSecondPart = (lines) => {
  const forest = lines.filter((l) => l !== '').map((l) => l.split('').map((l) => parseInt(l)))

  let row = 1
  let column = 1
  let columnEdge = forest[0].length - 2
  let rowEdge = forest.length - 2
  let maxScore = 0

  for (let r = row; r <= rowEdge; r++) {
    for (let c = column; c <= columnEdge; c++) {
      const config = {
        row: r,
        column: c,
        forest,
      }

      const score = getTotalScore(config)

      if (score > maxScore) {
        maxScore = score
      }
    }
  }

  return maxScore
}
