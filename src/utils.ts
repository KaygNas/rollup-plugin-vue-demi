import fs from 'fs'
import path from 'path'

function copyRecursiveSync(src: string, dest: string) {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = stats && stats.isDirectory()
  if (isDirectory) {
    !fs.existsSync(dest) && fs.mkdirSync(dest)
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName),
        path.join(dest, childItemName))
    })
  }
  else {
    fs.copyFileSync(src, dest)
  }
}

export function copyDir(src: string, dest: string) {
  // unlink for pnpm, #92
  try {
    fs.unlinkSync(dest)
  }
  catch (error) { }
  try {
    copyRecursiveSync(src, dest)
  }
  catch (error) {
    console.error(error)
  }
}
