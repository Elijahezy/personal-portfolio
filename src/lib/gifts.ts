import { kv } from '@vercel/kv'
import type { GiftList, PublicReservations } from './gifts-shared'

export { NAME_MAX_LENGTH } from './gifts-shared'
export type { GiftList, PublicReservations } from './gifts-shared'

// The list lives in KV rather than in this public repo; scripts/seed-gifts.mjs writes it.
export const LIST_KEY = 'gifts:list'
export const RESERVATIONS_KEY = 'gifts:reservations'

type StoredReservation = {
  name: string | null
  key: string
  at: string
}

export function isValidToken(token: unknown): token is string {
  const expected = process.env.GIFTS_TOKEN
  return Boolean(expected) && typeof token === 'string' && token === expected
}

export async function loadList(): Promise<GiftList | null> {
  return kv.get<GiftList>(LIST_KEY)
}

export async function loadReservations(): Promise<PublicReservations> {
  const stored = await kv.hgetall<Record<string, StoredReservation>>(RESERVATIONS_KEY)
  const result: PublicReservations = {}
  for (const [itemId, reservation] of Object.entries(stored ?? {})) {
    result[itemId] = { name: reservation.name }
  }
  return result
}

export function hasItem(list: GiftList, itemId: string) {
  return list.sections.some(section => section.items.some(item => item.id === itemId))
}

// Returns the cancel key, or null when someone else already took the item.
export async function reserve(itemId: string, name: string | null): Promise<string | null> {
  const key = crypto.randomUUID()
  const reservation: StoredReservation = { name, key, at: new Date().toISOString() }
  const created = await kv.hsetnx(RESERVATIONS_KEY, itemId, reservation)
  return created ? key : null
}

export async function cancel(itemId: string, key: string): Promise<boolean> {
  const reservation = await kv.hget<StoredReservation>(RESERVATIONS_KEY, itemId)
  if (!reservation || reservation.key !== key) return false
  await kv.hdel(RESERVATIONS_KEY, itemId)
  return true
}
