import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'

const QUALITY = 82
const PUBLIC = new URL('../public', import.meta.url).pathname

async function findPNGs(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = join(dir, e.name)
    if (e.isDirectory()) files.push(...await findPNGs(full))
    else if (extname(e.name).toLowerCase() === '.png') files.push(full)
  }
  return files
}

const pngs = await findPNGs(join(PUBLIC, 'img'))
// also convert root-level logos
const rootPNGs = (await readdir(PUBLIC, { withFileTypes: true }))
  .filter(e => !e.isDirectory() && extname(e.name).toLowerCase() === '.png')
  .map(e => join(PUBLIC, e.name))

const all = [...pngs, ...rootPNGs]
let saved = 0

for (const src of all) {
  const dest = src.replace(/\.png$/i, '.webp')
  const before = (await stat(src)).size
  await sharp(src).webp({ quality: QUALITY }).toFile(dest)
  const after = (await stat(dest)).size
  saved += before - after
  const pct = Math.round((1 - after / before) * 100)
  console.log(`${basename(src)} → webp  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${pct}%)`)
}

console.log(`\nTotal ahorrado: ${(saved / 1024 / 1024).toFixed(1)} MB`)
