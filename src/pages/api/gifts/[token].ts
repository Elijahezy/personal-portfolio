import type { NextApiRequest, NextApiResponse } from 'next'
import {
  NAME_MAX_LENGTH,
  cancel,
  hasItem,
  isValidToken,
  loadList,
  loadReservations,
  reserve,
} from '@/lib/gifts'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')

  if (!isValidToken(req.query.token)) {
    res.status(404).json({ error: 'Not found' })
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({ reservations: await loadReservations() })
    return
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    res.status(405).end('Method Not Allowed')
    return
  }

  const { action, itemId, name, key } = req.body ?? {}
  const list = await loadList()
  if (!list || typeof itemId !== 'string' || !hasItem(list, itemId)) {
    res.status(400).json({ error: 'Unknown item' })
    return
  }

  if (action === 'reserve') {
    const trimmed = typeof name === 'string' ? name.trim().slice(0, NAME_MAX_LENGTH) : ''
    const cancelKey = await reserve(itemId, trimmed || null)
    if (!cancelKey) {
      res.status(409).json({ error: 'Someone already reserved this', reservations: await loadReservations() })
      return
    }
    res.status(200).json({ key: cancelKey, reservations: await loadReservations() })
    return
  }

  if (action === 'cancel') {
    if (typeof key !== 'string' || !(await cancel(itemId, key))) {
      res.status(403).json({ error: 'Only the person who reserved this can cancel it', reservations: await loadReservations() })
      return
    }
    res.status(200).json({ reservations: await loadReservations() })
    return
  }

  res.status(400).json({ error: 'Unknown action' })
}
