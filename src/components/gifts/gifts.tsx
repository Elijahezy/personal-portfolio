import * as S from './gifts.styled'
import * as H from '@/styles/ui.styled'
import { FormEvent, useEffect, useState } from 'react'
import { NAME_MAX_LENGTH } from '@/lib/gifts-shared'
import type { GiftItem, GiftList, PublicReservations } from '@/lib/gifts-shared'

// Cancel keys for the reservations made from this browser, by item id.
const KEYS_STORAGE = 'gift-reservation-keys'

function readKeys(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(KEYS_STORAGE) || '{}')
  } catch {
    return {}
  }
}

function writeKeys(keys: Record<string, string>) {
  try {
    localStorage.setItem(KEYS_STORAGE, JSON.stringify(keys))
  } catch {
    // Private mode: the reservation still stands, it just can't be undone from here.
  }
}

interface GiftsProps {
  token: string
  list: GiftList
  initialReservations: PublicReservations
}

export default function Gifts({ token, list, initialReservations }: GiftsProps) {
  const [reservations, setReservations] = useState(initialReservations)
  const [keys, setKeys] = useState<Record<string, string>>({})

  useEffect(() => {
    setKeys(readKeys())
    // Pick up reservations made by others since the page was rendered.
    fetch(`/api/gifts/${token}`)
      .then(res => (res.ok ? res.json() : null))
      .then(data => data && setReservations(data.reservations))
      .catch(() => {})
  }, [token])

  const saveKey = (itemId: string, key: string | null) => {
    const next = { ...readKeys() }
    if (key) next[itemId] = key
    else delete next[itemId]
    writeKeys(next)
    setKeys(next)
  }

  return (
    <S.Wrapper>
      <div>
        <S.Title>{list.title}</S.Title>
        <S.Intro>
          {list.intro}
          <S.Likes>
            {list.likes.map(like => (
              <li key={like.label}>
                <S.LikeLabel>{like.label}.</S.LikeLabel> {like.text}
              </li>
            ))}
          </S.Likes>
        </S.Intro>
      </div>
      <H.Text>
        Getting something from the list? Mark it below so nobody else buys it too. Leave your name or stay anonymous.
      </H.Text>
      {list.sections.map(section => (
        <S.Section key={section.name}>
          <H.TitleH3>{section.name}</H.TitleH3>
          {section.items.map(item => (
            <Item
              key={item.id}
              token={token}
              item={item}
              reservation={reservations[item.id]}
              ownKey={keys[item.id]}
              onReservations={setReservations}
              onKey={key => saveKey(item.id, key)}
            />
          ))}
        </S.Section>
      ))}
    </S.Wrapper>
  )
}

interface ItemProps {
  token: string
  item: GiftItem
  reservation?: { name: string | null }
  ownKey?: string
  onReservations: (reservations: PublicReservations) => void
  onKey: (key: string | null) => void
}

function Item({ token, item, reservation, ownKey, onReservations, onKey }: ItemProps) {
  const [name, setName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const send = async (body: object) => {
    setBusy(true)
    setError(null)
    try {
      const res = await fetch(`/api/gifts/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId: item.id, ...body }),
      })
      const data = await res.json()
      if (data.reservations) onReservations(data.reservations)
      if (!res.ok) setError(data.error || 'Something went wrong')
      return res.ok ? data : null
    } catch {
      setError('Something went wrong, try again')
      return null
    } finally {
      setBusy(false)
    }
  }

  const onReserve = async (event: FormEvent) => {
    event.preventDefault()
    const data = await send({ action: 'reserve', name })
    if (data?.key) onKey(data.key)
  }

  const onCancel = async () => {
    const data = await send({ action: 'cancel', key: ownKey })
    if (data) onKey(null)
  }

  const reserved = Boolean(reservation)
  const mine = reserved && Boolean(ownKey)

  return (
    <S.Item $reserved={reserved && !mine}>
      <S.ItemHeader>
        {item.url
          ? <S.ItemTitle href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</S.ItemTitle>
          : <span>{item.title}</span>}
        {item.price && <S.Price>{item.price}</S.Price>}
      </S.ItemHeader>
      {item.note && <S.Note>{item.note}</S.Note>}
      {reserved ? (
        <S.Status>
          <span>
            {mine
              ? "You're getting this 🎁"
              : reservation?.name ? `Reserved by ${reservation.name}` : 'Reserved anonymously'}
          </span>
          {mine && <S.LinkButton type="button" onClick={onCancel} disabled={busy}>Undo</S.LinkButton>}
        </S.Status>
      ) : (
        <S.Form onSubmit={onReserve}>
          <S.NameInput
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Your name (optional)"
            maxLength={NAME_MAX_LENGTH}
            aria-label={`Your name for ${item.title} (optional)`}
          />
          <S.Button type="submit" disabled={busy}>I'll get this</S.Button>
        </S.Form>
      )}
      {error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Item>
  )
}
