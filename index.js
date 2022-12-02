import fs from 'fs/promises'
import * as path from 'path'

const getDirs = async (source) =>
  (await fs.readdir(source, { withFileTypes: true }))
    .filter((dir) => dir.isDirectory() && dir.name.startsWith('day'))
    .map((dir) => path.join(process.cwd(), dir.name))

const execute = async () => {
  const dirs = await getDirs(process.cwd())

  for (const dir of dirs) {
    console.log(`${dir.split('/').at(-1)} **********`)
    const lines = (await fs.readFile(path.join(dir, 'input.txt'))).toString().split('\n')

    const { processFirstPart, processSecondPart } = await import(path.join(dir, 'index.js'))

    console.log('First part', processFirstPart(lines))
    console.log('Second part', processSecondPart(lines))
    console.log('*************')
    console.log()
  }
}

await execute()
