// Uploads the birthday wishlist to KV. The list itself stays out of this public repo.
// Usage: node --env-file=.env.local scripts/seed-gifts.mjs <path/to/gifts.json>
import { readFileSync } from 'node:fs'
import { kv } from '@vercel/kv'

const path = process.argv[2]
if (!path) {
  console.error('Usage: node --env-file=.env.local scripts/seed-gifts.mjs <path/to/gifts.json>')
  process.exit(1)
}

const list = JSON.parse(readFileSync(path, 'utf8'))
const ids = list.sections.flatMap(section => section.items.map(item => item.id))
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index)
if (duplicates.length) {
  console.error(`Duplicate item ids: ${duplicates.join(', ')}`)
  process.exit(1)
}

await kv.set('gifts:list', list)

// Reservations for items that were removed from the list would otherwise linger.
const reservations = (await kv.hgetall('gifts:reservations')) ?? {}
const stale = Object.keys(reservations).filter(id => !ids.includes(id))
if (stale.length) await kv.hdel('gifts:reservations', ...stale)

console.log(`Saved ${ids.length} items; ${Object.keys(reservations).length - stale.length} reserved, ${stale.length} stale reservations dropped.`)
