import type { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'

type SpaceFacts = {
  starlink: number
  active: number
  share: number
  peopleInSpace: number | null
  issLat: number | null
  issLon: number | null
  updatedAt: string
}

const CACHE_KEY = 'space_facts_v1'
const TTL_SECONDS = 60 * 60 * 24 // 1 day

async function fetchJson(url: string, timeoutMs: number) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  } finally {
    clearTimeout(timeoutId)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
    return
  }

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=604800'
  )

  // 1) Try KV first
  const cached = await kv.get<SpaceFacts>(CACHE_KEY)
  if (cached) {
    res.status(200).json(cached)
    return
  }

  // 2) Fetch fresh data
  const [starlinkData, activeData, peopleData, issData] = await Promise.all([
    fetchJson('https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=json', 12000),
    fetchJson('https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json', 12000),
    fetchJson('http://api.open-notify.org/astros.json', 4000),
    fetchJson('http://api.open-notify.org/iss-now.json', 4000),
  ])

  if (!Array.isArray(starlinkData) || !Array.isArray(activeData)) {
    res.status(503).json({ error: 'Satellite data unavailable' })
    return
  }

  const starlink = starlinkData.length
  const active = activeData.length
  const share = active ? Math.round((starlink / active) * 1000) / 10 : 0

  const peopleInSpace =
    typeof peopleData?.number === 'number' ? peopleData.number : null

  const issLat = Number.isFinite(Number(issData?.iss_position?.latitude))
    ? Number(issData.iss_position.latitude)
    : null

  const issLon = Number.isFinite(Number(issData?.iss_position?.longitude))
    ? Number(issData.iss_position.longitude)
    : null

  const data: SpaceFacts = {
    starlink,
    active,
    share,
    peopleInSpace,
    issLat,
    issLon,
    updatedAt: new Date().toISOString(),
  }

  // 3) Save to KV for 24h
  await kv.set(CACHE_KEY, data, { ex: TTL_SECONDS })

  res.status(200).json(data)
}
