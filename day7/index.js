const fileRegExp = new RegExp('^([0-9]+) .*$')

const isFile = (text) => fileRegExp.test(text)
const isLevelUp = (text) => text === '$ cd ..'

const getFolderSize = (lines, start = 0, acc = 0, usedSpace = 0, folders = []) => {
  let i = start + 1
  let line = lines[i]
  let folderSize = 0
  let totalAcc = acc
  let totalSpace = usedSpace

  while (line !== '' && !isLevelUp(line) && i < lines.length) {
    if (isFile(line)) {
      const fileSize = parseInt(line.match(fileRegExp)[1])
      folderSize += fileSize
      totalSpace += fileSize
    }

    if (line.startsWith('$ cd')) {
      const {
        folderSize: subFolderSize,
        currentPosition,
        acc: folderAcc,
        usedSpace: accSpace,
      } = getFolderSize(lines, i, totalAcc, totalSpace, folders)

      folderSize += subFolderSize
      totalAcc = folderAcc
      totalSpace = accSpace

      i = currentPosition + 1
      line = lines[i]
      continue
    }

    i++
    line = lines[i]
  }

  if (folderSize <= 100000) {
    totalAcc += folderSize
  }

  folders.push(folderSize)

  return {
    folderSize,
    currentPosition: i,
    acc: totalAcc,
    folders,
    usedSpace: totalSpace,
  }
}

export const processFirstPart = (lines) => {
  const { acc } = getFolderSize(lines)

  return acc
}

export const processSecondPart = (lines) => {
  const { folders, usedSpace } = getFolderSize(lines)

  const spaceToFree = 30000000 - (70000000 - usedSpace)

  let selectedFolder = 0

  folders.forEach((f) => {
    if (f >= spaceToFree) {
      selectedFolder = selectedFolder === 0 ? f : f <= selectedFolder ? f : selectedFolder
    }
  })

  return selectedFolder
}
