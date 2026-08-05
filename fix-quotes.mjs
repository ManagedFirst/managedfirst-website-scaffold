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
  const buf = readFileSync(file)
  const original = buf.toString('utf8')

  let fixed = original
  // curly double quotes
  fixed = fixed.replace(/[\u201c\u201d\u201e\u201f\u275d\u275e]/g, '\\"')
  // curly single quotes / apostrophes
  fixed = fixed.replace(/[\u2018\u2019\u201a\u201b\u275b\u275c]/g, "'")

  if (original !== fixed) {
    writeFileSync(file, fixed, 'utf8')
    console.log('Fixed:', file)
  }
}

console.log('Done!')