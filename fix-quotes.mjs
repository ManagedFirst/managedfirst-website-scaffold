import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

function getAllFiles(dir) {
  const files = []
  for (const item of readdirSync(dir)) {
    const full = join(dir, item)
    if (statSync(full).isDirectory()) {
      files.push(...getAllFiles(full))
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      files.push(full)
    }
  }
  return files
}

for (const file of getAllFiles('./src')) {
  const original = readFileSync(file, 'utf8')
  const fixed = original
    .replace(/\u201c/g, '\\"')
    .replace(/\u201d/g, '\\"')
    .replace(/\u2018/g, "'")
    .replace(/\u2019/g, "'")

  if (original !== fixed) {
    writeFileSync(file, fixed)
    console.log('Fixed:', file)
  }
}

console.log('Done!')